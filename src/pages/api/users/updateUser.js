import { withDB } from '@/middlewares/withDB';
import UserModel from '@/pages/api/models/UserModel'

const handler = async (req, res) => {
    try {
      const { id } = req.query; 
      const { name, lastname, birthdate, identification_number, gbalocation } = req.body; 
  
      const user = await UserModel.findByIdAndUpdate(
        id,
        {
          name,
          lastname,
          birthdate,
          identification_number,
          gbalocation,
        },
        { new: true } 
      );
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Ha ocurrido un error al actualizar el usuario' });
    }
};

export default withDB(handler)