// I M P O R T:  M O D E L
import User from '../models/User.js';

//========================

export async function usersGetAll (req, res, next){
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(err.message);
    next(err);
  }
};
