import express, { Application } from "express"
import cors from "cors"
// Routes
import pingPongRouter from "./routes/ping.routes" 

class Server {
  private port: string = process.env["PORT"] || "3000";
  private app: Application
  private basePath = "/api/v1"

  constructor() {
    this.app = express();
    this.middlewares();
    this.paths();
  }

  private paths(): void {
    this.app.use(this.basePath, pingPongRouter)
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  public listen(): void {
    this.app.listen(this.port)
  }
}

export default Server;
