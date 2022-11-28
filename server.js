// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import * as dotenv from "dotenv"; dotenv.config();
import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// I M P O R T:  R O U T E S
import listRouter from './routes/list.js';
import registerRouter from './routes/register.js';

// C O N N E C T   W I T H   M O N G O O S E  D B
const DB_CONNECTION_STRING =  process.env.MONGO_DB_CONNECTION_STRING
mongoose.connect(DB_CONNECTION_STRING)
  .then(() => console.log('Connect with MongoDB: SUCCESS '))
  .catch((err) => console.log('Connect with MongoDB: FAILED ', err))
mongoose.connection.on('error', console.log);

// C R E A T E  S E R V E R
const app = express();
const PORT = process.env.PORT;

// M I D D L E W A R E
// From Dependencies
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// From Routes
app.use('/list', listRouter);
app.use('/register', registerRouter);

// S E R V E R - S T A R T
app.listen(PORT, () => {
  console.log('Server läuft auf Port: ' + PORT);
});