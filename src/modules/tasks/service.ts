import { Task } from '../../database';

const listenToAllTask = async () => {
  return Task.find();
};

export const taskService = {
  listenToAllTask,
};
