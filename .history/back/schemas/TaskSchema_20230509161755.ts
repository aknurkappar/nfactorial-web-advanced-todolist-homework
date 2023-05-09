import { Schema } from "mongoose"

export const taskSchema = new Schema<Task>({
    title: {type: String, required: true},
    createDate : {type : Date, default : ()=> new Date(), immutable: true},
    deadline: String,
    isDone: { type: Boolean, default: false, immutable: }
})