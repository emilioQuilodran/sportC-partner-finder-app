import { connection } from '@/pages/api/config/db';

export const withDB = (handler) => async (req, res) => {
    try {
      const con = await connection();
      req.db = con; // Agrega la conexión a la solicitud para que esté disponible en el controlador
      return handler(req, res);
    } catch (error) {
      console.error('Error connecting to database:', error);
      return res.status(500).json({ msg: 'Error connecting to database' });
    }
};