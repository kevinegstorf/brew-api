import { Application } from "express";
import BatchRoutes from "./Batch.routes";


export default class Routes {
  constructor(app: Application) {
    app.use("/api/v1/batch", BatchRoutes);
  }
}