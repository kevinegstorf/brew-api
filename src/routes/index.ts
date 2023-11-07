import { Application } from "express";
import BatchRoutes from "./src/Batch.routes";
import UserRoutes from "./src/User.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/v1/batch", BatchRoutes);
    app.use("/api/v1/user", UserRoutes);
  }
}