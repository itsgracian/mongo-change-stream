import express, { Router } from 'express';
import { taskRoute } from './tasks';

const route: Router = express.Router();

route.use('/api/tasks', taskRoute);

export * from './tasks';
export { route };
