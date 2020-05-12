import Sequelize from 'sequelize';
import Usuario from '../models/Usuario';
import dbConfig from '../config/database';

const models = [Usuario];
class Database {
  public constructor() {
    this.init();
  }

  private init() {
    const connection = new Sequelize(dbConfig);
    models.map((model) => model.init(connection));
  }
}

export default new Database();
