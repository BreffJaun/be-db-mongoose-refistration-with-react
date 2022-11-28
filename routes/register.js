// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import express from 'express';

// I M P O R T:  C O N T R O L L E R
import { registersPost } from '../controller/registersController.js';

// ========================

// C R E A T E  R O U T E S

const router = express.Router();

router
  .route('/')
  .post(registersPost);

export default router;