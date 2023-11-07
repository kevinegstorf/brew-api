import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import Routes from './src/routes';

class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  private config(app: Application): void {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}

dotenv.config();

const app: Application = express();
new Server(app)
dotenv.config();

const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req: Request, res: Response) => {
  res.statusCode = 200;
  res.json({ message: "Welcome to my api." });
});

app.listen(port, () => {
  console.log(`Server is Fired at http://localhost:${port}`);
});