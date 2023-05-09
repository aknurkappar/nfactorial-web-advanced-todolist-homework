
import mongoose from "mongoose"
import { Task } from "./models/Task"
import express, { Express, Request, Response } from "express"
const cors = require("cors")
const router = require("./routers/to-do-list-router")
const app : Express = express()
app.use(express.json())
app.use(cors())
app.use("/", router)

run().catch((err) =>{ console.log("Connection to database is refused: ", err) })

async function run() {
    await mongoose.connect("mongodb://localhost:27017/todoapp")
}

app.listen(process.env.PORT)

