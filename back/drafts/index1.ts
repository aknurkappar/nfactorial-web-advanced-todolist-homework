import express, { Express, Request, Response } from "express"
import axios from "axios"
import { join } from "path"
const cors = require("cors")
const router = require("./routers/to-do-list-router")
const app : Express = express()
const dotenv = require("dotenv")
dotenv.config()

app.use(express.json())
app.use(cors())
app.use("/", router)


app.listen(process.env.PORT)

