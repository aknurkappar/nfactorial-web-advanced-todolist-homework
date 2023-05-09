import express, { Request, Response } from "express"
import axios from "axios"
import { Task } from "../models/Task"
const router = express.Router()
const dotenv = require("dotenv")
dotenv.config()

router.get("/task", async (req : Request, res : Response)=>{
    try{
        const task = await Task.find({})
        res.status(200).json(task)
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Something wrong with server")
    }
})

router.delete("/task", async (req : Request, res : Response)=>{
    try{
        await Task.deleteMany({})
        res.status(200).json("All ")
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Something wrong with server")
    }
})

router.post("/task", async (req : Request, res : Response)=>{
    try{
        const task = await Task.create({
            title : "WA homework",
            deadline : "2023-05-10T05:11:59.592Z",
        })
        res.status(200).json(task)
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Something wrong with server")
    }
})

router.get("/task/:id", async (req : Request, res : Response)=>{
    try{
        const task = await Task.findById(req.params.id)
        res.status(200).json(task)
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Something wrong with server")
    }
})

router.delete("/task/:id", async (req : Request, res : Response)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        res.status(200).json("task")
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Something wrong with server")
    }
})

router.put("/task/:id", async (updatedTask : Task, req : Request, res : Response)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, updatedTask)
        res.status(200).json(task)
    } catch(err) {
        console.log("Error: ", err)
        res.status(500).send("Something wrong with server")
    }
})

module.exports = router