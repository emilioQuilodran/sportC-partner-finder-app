import { withDB } from '@/middlewares/withDB';
import UserModel from '@/pages/api/models/UserModel'

const handler = async (req, res) => {
    try {
        let users;
        let { gbalocation } = req.query;
        const isGBALocation = gbalocation && gbalocation.toLowerCase() === "true";
        if (isGBALocation) {
          users = await UserModel.find({ gbalocation: true });
          return res.status(200).json(users);
        } else {
          users = await UserModel.find({ gbalocation: { $ne: true } });
          return res.status(200).json(users);
        }
      } catch (error) {
        console.error('Error fetching users by location:', error);
        return res.status(500).json({ error: 'Internal server error'}) ;
      }
}

export default withDB(handler)