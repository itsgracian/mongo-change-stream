import { Request, Response } from 'express';
import { taskService } from './';

const listenToAllTask = async (req: Request, res: Response) => {
  try {
    const data = await taskService.listenToAllTask();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

export const taskController = {
  listenToAllTask,
};
