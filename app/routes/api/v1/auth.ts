import express from 'express';
import { AuthController } from '../../../http/controllers/AuthController';

// Validation stuff
import validate from '../../../http/middleware/ValidationMiddleware';
import loginSchema from '../../../schema/login';

const router = express.Router();

router.post('/', validate(loginSchema) ,AuthController.login);

export default router;
