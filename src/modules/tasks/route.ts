import express, { Router } from 'express';
import { taskController } from './controller';

const route: Router = express.Router();

route.get('/', taskController.listenToAllTask);

export default route;
