import { Task } from '../../database';
import { TaskSchema } from '../../database/models/task';

export interface NewTask {
  title: string;
  description: string;
}

const listenToAllTask = async (): Promise<TaskSchema[]> => {
  return Task.find();
};

const addTask = async (data: NewTask): Promise<TaskSchema> => {
  const newTask = new Task(data);
  return await newTask.save();
};

export const taskService = {
  listenToAllTask,
  addTask,
};
