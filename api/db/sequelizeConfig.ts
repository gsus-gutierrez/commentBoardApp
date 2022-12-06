import { Sequelize } from "sequelize";
import dbConfig from "./dbConfig";

const sequelize: Sequelize = new Sequelize(dbConfig.database as string, dbConfig.username as string, dbConfig.password, { ...dbConfig });

export default sequelize