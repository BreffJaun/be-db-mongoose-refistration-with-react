// I M P O R T:  M O D E L
import User from '../models/User.js'

//========================

export async function registersPost (req, res, next){
  try {
    await User.create(req.body);
    res.status(200).send("REGISTRATION SUCCESSFUL!");
  } catch (err) {
    res.status(400).send("REGISTRATION FAILED!");
    next(err);
  }
}