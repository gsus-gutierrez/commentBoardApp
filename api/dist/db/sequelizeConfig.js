"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConfig_1 = __importDefault(require("./dbConfig"));
const sequelize = new sequelize_1.Sequelize(dbConfig_1.default.database, dbConfig_1.default.username, dbConfig_1.default.password, Object.assign({}, dbConfig_1.default));
exports.default = sequelize;
