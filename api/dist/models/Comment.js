"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require('sequelize');
const sequelize_1 = require("sequelize");
const sequelizeConfig_1 = __importDefault(require("../db/sequelizeConfig"));
class Comment extends sequelize_1.Model {
}
Comment.init({
    comment: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    sequelize: sequelizeConfig_1.default,
});
// `sequelize.define` also returns the model
console.log(Comment === sequelizeConfig_1.default.models.Comment); // true
console.log(Comment) // true
;
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelizeConfig_1.default.sync();
    // Code here
}))();
exports.default = Comment;
