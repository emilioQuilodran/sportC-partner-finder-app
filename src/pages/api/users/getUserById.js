import { withDB } from '@/middlewares/withDB';
import UserModel from '@/pages/api/models/UserModel';

const handler = async (req, res) => {
  try {
    const { id } = req.query;
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export default withDB(handler)