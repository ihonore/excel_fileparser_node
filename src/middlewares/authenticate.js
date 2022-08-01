import 'dotenv/config';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = await jwtDecode(token);
    next(decoded);
  } catch (error) {
    return res.status(401).json({
      status: 401,
      error: 'You are not authorized, Please login',
    });
  }
};
