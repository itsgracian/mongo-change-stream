import mongoose from 'mongoose';

const connectionUrl = 'mongodb://localhost:27017/streams';

export const connectDatabase = async () => {
  try {
    await mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return;
  } catch (error) {
    throw new Error('Failed to connect to database');
  }
};

export const database = mongoose.connection;
