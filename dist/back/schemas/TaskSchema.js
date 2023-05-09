"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchema = void 0;
const mongoose_1 = require("mongoose");
exports.taskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    createDate: { type: Date, default: () => new Date(), immutable: true },
    deadline: String,
    isDone: { type: Boolean, default: false }
});
