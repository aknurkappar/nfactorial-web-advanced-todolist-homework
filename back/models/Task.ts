import { model } from "mongoose";
import { taskSchema } from "../schemas/TaskSchema"

export const Task = model<Task>("Task", taskSchema)
