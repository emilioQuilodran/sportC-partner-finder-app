import { withDB } from '@/middlewares/withDB';
import UserModel from '@/pages/api/models/UserModel'

const handler = async (req, res) => {
    let users;
    try{
        users = await UserModel.find()
        return res.status(200).json(users)
    }catch(error){
        console.log("error...", error)
    }
}

export default withDB(handler)