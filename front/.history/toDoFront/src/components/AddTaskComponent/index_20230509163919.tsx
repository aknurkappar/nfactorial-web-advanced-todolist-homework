import { useState } from 'react'
import { BASE_URL } from '../../constants'
import './index.css'

function AddTaskComponent() {

  const [newTask, setNewTask] = useState({} as Task)
  const deadlineDate = ""
  const 

  const addTask = async(task : Task)=>{
    await fetch(
        `${BASE_URL}task/`, {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
              {"title" : task.title,
              "dedline" : task.deadline
            })
        })
        console.log(newTask)
        setNewTask({} as Task)
}

  return (
    <form className='add-task-form'>
      <p>Add new task:</p>
      <input type='text' value={newTask.title}/>
      <div>
        <input type='date' value={deadlineDate}/>
        <input type='time' value={deadlineTime}/>
      </div>
      <button type='submit' onSubmit={()=>addTask(newTask)}>Add task</button>
    </form>
  )
}

export default AddTaskComponent
