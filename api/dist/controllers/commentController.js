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
exports.getComments = exports.getComment = exports.deleteComment = exports.updateComment = exports.createComment = void 0;
const Comment_1 = __importDefault(require("../models/Comment"));
const createComment = (comment, email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newComment = yield Comment_1.default.create({ comment, email });
        return newComment;
    }
    catch (error) {
        console.error(error);
    }
});
exports.createComment = createComment;
const updateComment = (id, comment, email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentInstance = yield (0, exports.getComment)(id);
        return yield (commentInstance === null || commentInstance === void 0 ? void 0 : commentInstance.update({ comment, email }));
    }
    catch (error) {
        console.error(error);
        throw new Error('Error while updating comment');
    }
});
exports.updateComment = updateComment;
const deleteComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentInstance = yield (0, exports.getComment)(id);
        return yield (commentInstance === null || commentInstance === void 0 ? void 0 : commentInstance.destroy());
    }
    catch (error) {
        console.error(error);
        throw new Error('Error while deleting comment');
    }
});
exports.deleteComment = deleteComment;
const getComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield Comment_1.default.findByPk(id);
        if (!comment)
            throw new Error('No comment found');
        return comment;
    }
    catch (error) {
        console.error(error);
        throw new Error('Error while finding comment');
    }
});
exports.getComment = getComment;
const getComments = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield Comment_1.default.findAll();
        if (!comments)
            throw new Error('No comment found');
        return comments;
    }
    catch (error) {
        console.error(error);
        throw new Error('Error while finding comment');
    }
});
exports.getComments = getComments;
