import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (_req: Request, res: Response) => {
  res.statusCode = 200;
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fired at http://localhost:${port}`);
});