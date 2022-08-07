import { Router } from 'express';
import UserController from '../controllers/userController';

const User = new UserController();

const router = Router();

router.post('/', User.postUser);

export default router;