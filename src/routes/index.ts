import express from 'express';
import { UserController, validate } from '../controllers/User';

const router = express.Router();

router.post(
  '/user/register',
  validate('registerUser'),
  UserController.registerUser
  )

export default router;
