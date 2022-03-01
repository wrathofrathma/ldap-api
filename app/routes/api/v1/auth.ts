import express from 'express';

import { AuthController } from '../../../http/controllers/AuthController';

const router = express.Router();

router.post('/', AuthController.login);

export default router;
