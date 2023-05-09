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
const Task_1 = require("../models/Task");
const router = express_1.default.Router();
const dotenv = require("dotenv");
dotenv.config();
router.get("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.Task.findOne();
        res.status(200).json(task);
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Something wrong with server");
    }
}));
router.delete("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Task_1.Task.deleteMany({});
        res.status(200).json("All ");
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Something wrong with server");
    }
}));
router.post("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.Task.create({
            title: "WA homework",
            deadline: "2023-05-10T05:11:59.592Z",
        });
        res.status(200).json(task);
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Something wrong with server");
    }
}));
router.get("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.Task.findById(req.params.id);
        res.status(200).json(task);
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Something wrong with server");
    }
}));
router.delete("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.Task.findByIdAndDelete(req.params.id);
        res.status(200).json("task");
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Something wrong with server");
    }
}));
router.put("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.Task.findByIdAndUpdate(req.params.id, {
            title: "Upadted title 2"
        });
        res.status(200).json(task);
    }
    catch (err) {
        console.log("Error: ", err);
        res.status(500).send("Something wrong with server");
    }
}));
module.exports = router;
