"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require('sequelize');
const sequelizeConfig_1 = __importDefault(require("../db/sequelizeConfig"));
const Email = sequelizeConfig_1.default.define('Email', {
    // Model attributes are defined here
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
// Other model options go here
});
// `sequelize.define` also returns the model
console.log(Email === sequelizeConfig_1.default.models.Email); // true
