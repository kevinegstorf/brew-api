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
new Server(app);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req: Request, res: Response) => {
  res.statusCode = 200;
  res.json({ message: "Welcome to my api." });
});

app
  .listen(PORT, "localhost", function () {
    console.log(`Server is running on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Error: ${PORT} address already in use`);
    } else {
      console.log(err);
    }
  });