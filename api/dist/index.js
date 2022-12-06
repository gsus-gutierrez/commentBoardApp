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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const sequelizeConfig_1 = __importDefault(require("./db/sequelizeConfig"));
const commentController_1 = require("./controllers/commentController");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// parse application/json
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield (0, commentController_1.createComment)('mail', 'comment'));
    res.send('Express + TypeScript Server with Perritos');
}));
app.post('/comment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newComment = yield (0, commentController_1.createComment)(req.body.comment, req.body.email);
        res.status(201).send(newComment);
    }
    catch (error) {
        console.error(error);
        res.status(400).send('Theres been an error while creating a comment!');
    }
}));
app.get('/comment/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield (0, commentController_1.getComments)();
        res.status(200).send(comments);
    }
    catch (error) {
        console.error(error);
        res.status(400).send('Theres been an error while creating a comment!');
    }
}));
app.get('/comment/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield (0, commentController_1.getComment)(req.params.id);
        res.status(200).send(comment);
    }
    catch (error) {
        console.error(error);
        res.status(400).send('Theres been an error while creating a comment!');
    }
}));
app.put('/comment/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedComment = yield (0, commentController_1.updateComment)(req.params.id, req.body.comment, req.body.email);
        res.status(201).send(updatedComment);
    }
    catch (error) {
        console.error(error);
        res.status(400).send('Theres been an error while creating a comment!');
    }
}));
app.delete('/comment/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedComment = yield (0, commentController_1.deleteComment)(req.params.id);
        res.status(201).send(deletedComment);
    }
    catch (error) {
        console.error(error);
        res.status(400).send('Theres been an error while creating a comment!');
    }
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
const trySequelizeConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelizeConfig_1.default.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
trySequelizeConnection();
