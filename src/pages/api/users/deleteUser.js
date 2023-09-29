import { withDB } from '@/middlewares/withDB';
import UserModel from '@/pages/api/models/UserModel'

const handler = async (req, res) => {
    const { id } = req.query;
    try{
        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
        }

        return res.status(200).json({
            success: true,
            message: 'Usuario eliminado correctamente',
        });
    }catch(error){
        console.error('Error eliminando usuario:', error);
        return res.status(500).json({ msg: 'Error eliminando usuario' });
    }
}

export default withDB(handler)