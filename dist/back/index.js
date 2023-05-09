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
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const router = require("./routers/to-do-list-router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use("/", router);
run().catch((err) => { console.log("Connection to database is refused: ", err); });
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect("mongodb://localhost:27017/todoapp");
        // const task1 = new Task({
        //     title : "WA homework",
        //     deadline : Date,
        // })
        // await task1.save()
        // console.log(task1)
    });
}
app.listen(process.env.PORT);
