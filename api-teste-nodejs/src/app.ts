import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';
import database from './database';

class App {
  public express: Application;
  public constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  private database(): void {
    database;
  }

  private routes(): void {
    this.express.use(routes);
  }
}
export default new App().express;
