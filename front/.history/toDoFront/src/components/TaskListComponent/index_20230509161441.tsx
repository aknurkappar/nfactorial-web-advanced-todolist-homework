import './index.css'
import { BASE_URL } from '../../constants'
import { useEffect, useState } from 'react';
import AddTaskComponent from '../AddTaskComponent';

function TaskListComponent() {
    const [taskList, setTaskList] = useState([] as Task[]);
    const [currentTask, setCurrentTask] = useState({});

    const getAllTasks = async()=>{
        let result = await fetch(
            `${BASE_URL}task`, {
                method: "get",
            })
        const data = await result.json() as Task[]
        setTaskList(data)
    }

    const getTaskById = async(id : String)=>{
        let result = await fetch(
            `${BASE_URL}task/${id}`, {
                method: "get",
            })
        const data = await result.json() as Task
        console.log(data)
        await setCurrentTask({
            "_id" : data._id,
            "title" : data.title,
            createDate : data.createDate,
            deadline : data.deadline,
            isDone : data.isDone,
        })
        console.log(currentTask)
    }

    const markTask = async(id : String, isDone : Boolean)=>{
        const isDoneState = !isDone
        await fetch(
            `${BASE_URL}task/${id}`, {
                method: "put",
                body: JSON.stringify({"isDone" : isDoneState.toString()})
            })
            console.log(isDoneState)
            getAllTasks()
    }

    useEffect(() => {
        getAllTasks()
    })

  return (
    <div className='main'>
        <p className='header'>To Do List</p>
    {
        taskList && taskList.map((task, index) => (
            <div key = {index}>
                <div className="to-do-item" key={index}>
                <button onClick={()=>{}}
                className="more-button"></button>
                <input type="checkbox" onChange={()=>{markTask(task._id, task.isDone) }} checked={task.isDone}/>
                <div className='to-do-item-text'>
                    <p className={`${task.isDone ? "done" : "todo-text"}`}>{task.title}</p>
                    <p>| deadleine: {task.deadline}</p> 
                </div>
                </div>
            </div>
        ))
    }    
        <AddTaskComponent/>  
    </div>
  )
}

export default TaskListComponent
