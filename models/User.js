// I M P O R T   D E P E N D E N C I E S
import {Schema, model} from "mongoose";

// S C H E M A  -  D A T A   S T R U C T U R E
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: String,
  lastName: String,
  dateOfBirth: {
    type: Date
  },
  email: {
    type: String,
    required: true
  },
  telephone: String,
  gender: {
    type: String,
    enum: ["Male", "Female", "Other", "N/A"],
    default: "N/A"
  }
}, {strictQuery: true});


// M O D E L - T E M P L A T E   F O R   D B   E N T R I E S
const UserModel = model('User', userSchema, 'users');
export default UserModel;