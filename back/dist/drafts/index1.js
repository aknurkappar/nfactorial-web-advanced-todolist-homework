"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const router = require("./routers/to-do-list-router");
const app = (0, express_1.default)();
const dotenv = require("dotenv");
dotenv.config();
app.use(express_1.default.json());
app.use(cors());
app.use("/", router);
app.listen(process.env.PORT);
