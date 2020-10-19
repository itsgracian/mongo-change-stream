import express, { Express } from 'express';
import bodyParser from 'body-parser';
import { connectDatabase } from './database';
import { route } from './modules';

const app: Express = express();

const port = process.env.PORT || 8000;

//database
connectDatabase();

// body parser
app.use(bodyParser.json());

// App module
app.use(route);

app.listen(port, () => {
  console.log(`Server is listening to a port ${port}`);
});
