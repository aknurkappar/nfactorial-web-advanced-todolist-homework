import { useState } from 'react'
import { BASE_URL } from '../../constants'
import './index.css'

function AddTaskComponent() {

  const [newTask, setNewTask] = useState({} as Task)
  const [title, setTitte] =  useState("")
  const [deadlineDate, setDeadlineDate] =  useState("")
  const [deadlineTime, setDeadlineTime] =  useState("")

  const addTask = async()=>{
    console.log(title)
    console.log(deadlineDate)
    await fetch(
        `${BASE_URL}/task`, {
            method: "post",
            body: JSON.stringify(
              {"title" : title,
              "dedline" : deadlineDate
            })
        }).catch((err) =>{
          console.log(err)
        })
        console.log(newTask)
        setNewTask({} as Task)
}

  return (
    <form className='add-task-form'>
      <p>Add new task:</p>
      <input type='text' value={title} onChange={(e)=> setTitte(e.target.value)}/>
      <div>
        <input type='date' value={deadlineDate} onChange={(e)=> setDeadlineDate(e.target.value)}/>
        <input type='time' value={deadlineTime} onChange={(e)=> setDeadlineTime(e.target.value)}/>
      </div>
      <div>
        {deadlineTime}
        {deadlineDate}
      </div>
      <button type='submit' onClick={()=>addTask()}>Add task</button>
    </form>
  )
}

export default AddTaskComponent
