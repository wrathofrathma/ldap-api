import express from 'express';

import { IndexController } from '../http/controllers/IndexController';

const router = express.Router();

router.get('/', IndexController.index);

import apiRouter from './api';

router.use('/api', apiRouter);

export default router;