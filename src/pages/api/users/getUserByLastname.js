import { withDB } from '@/middlewares/withDB';
import UserModel from '@/pages/api/models/UserModel'

const handler = async (req, res) => {
    try {
        const { lastname } = req.query;
        const users = await UserModel.find({ lastname })
        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error'}) 
    }
}

export default withDB(handler)