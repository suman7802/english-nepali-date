import {Router} from 'express';
const userRouter = Router();
import {controller} from '../controllers/controller';

userRouter.get('/english', controller.english);
userRouter.get('/nepali', controller.nepali);

export {userRouter};
