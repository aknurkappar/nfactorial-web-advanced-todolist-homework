import './index.css'
import { BASE_URL } from '../../constants'
import { useEffect, useState } from 'react';

function TaskListComponent() {
    const [taskList, setTaskList] = useState([] as Task[]);
    const [title, setTitte] = useState("")
    const [deadlineDate, setDeadlineDate] = useState("")
    const [deadlineTime, setDeadlineTime] = useState("")

    const getAllTasks = async()=>{
        let result = await fetch(
            `${BASE_URL}task`, {
                method: "get",
            })
        const data = await result.json() as Task[]
        setTaskList(data)
        window.location.reload()
    }

    const addTask = async () => {
        console.log(title)
        console.log(deadlineDate)
        await fetch(
            `${BASE_URL}task`, {
                method: "post",
                body: JSON.stringify({
                  "title" : title,
                  "deadline" : deadlineDate
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
            })
            window.location.reload()
    }

    const markTask = async(id : String, isDone : Boolean)=>{
        const isDoneState = !isDone
        await fetch(
            `${BASE_URL}task/${id}/`, {
                method: "put",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"isDone" : isDoneState})
            })
            console.log(isDoneState)
    }

    const deleteTask = async(id : String)=>{
        await fetch(
            `${BASE_URL}task/${id}/`, {
                method: "delete",
                headers: {'Content-Type': 'application/json'},
            })
    }
    

    useEffect(() => {
        getAllTasks()
    }, [])

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
                <button onClick={()=>{deleteTask(task._id)}} className='delete-button'>Delete</button>
                </div>
            </div>
        ))
    }
        <div className='add-task-form'>
            <p>Add new task:</p>
            <input type='text' value={title} onChange={(e)=> setTitte(e.target.value)}/>
            <div>
            <input type='date' value={deadlineDate} onChange={(e)=> setDeadlineDate(e.target.value)}/>
            <input type='time' value={deadlineTime} onChange={(e)=> setDeadlineTime(e.target.value)}/>
            </div>
            <button onClick={addTask}>Add task</button>
        </div>
    </div>
  )
}

export default TaskListComponent
