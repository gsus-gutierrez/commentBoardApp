import { Config, Options } from "sequelize"


const dbConfig: Options = {
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: "api" as string,
    dialect: "postgres",
    port: 5433,
}

export default dbConfig