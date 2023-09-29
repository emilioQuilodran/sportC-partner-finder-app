import { withDB } from '@/middlewares/withDB';
import UserModel from '@/pages/api/models/UserModel'

const handler = async (req, res) => {
    const { name, lastname, birthdate, identification_number, gbalocation } = req.body;

  try {
    const user = new UserModel({
      name,
      lastname,
      birthdate,
      identification_number,
      gbalocation
    });
    console.log(user)

    const savedUser = await user.save(); 
    res.status(200).json({
      created: true,
      user: savedUser,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ msg: 'Error creating user' });
  }
};

export default withDB(handler)