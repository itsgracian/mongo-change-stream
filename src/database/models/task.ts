import mongoose, { Schema, Document } from 'mongoose';

export interface TaskSchema extends Document {
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
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: false,
    default: Date.now
  },
});

export default mongoose.model<TaskSchema>('Task', taskSchema);