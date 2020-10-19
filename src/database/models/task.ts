import mongoose, { Schema, Document } from 'mongoose';

export interface Task extends Document {
  title: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const taskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});

export default mongoose.model<Task>('Task', taskSchema);