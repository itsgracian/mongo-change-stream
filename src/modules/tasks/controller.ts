import { Request, Response } from 'express';
import { taskService } from './';
import { TaskSchema } from '../../database';

const listenToAllTask = async (
  req: Request,
  res: Response
): Promise<Response<{ data: TaskSchema[] }>> => {
  try {
    const data = await taskService.listenToAllTask();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

const addTask = async (
  req: Request,
  res: Response
): Promise<Response<{ data: string }>> => {
  try {
    const { title, description } = req.body;

    await taskService.addTask({ title, description });

    return res.status(200).json({ data: 'Task saved successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};
export const taskController = {
  listenToAllTask,
  addTask,
};
