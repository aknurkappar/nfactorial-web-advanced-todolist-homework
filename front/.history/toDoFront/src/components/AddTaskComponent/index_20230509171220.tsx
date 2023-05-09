import { useState } from 'react'
import { BASE_URL } from '../../constants'
import './index.css'

function AddTaskComponent() {

  const [title, setTitte] = useState("")
  const [deadlineDate, setDeadlineDate] = useState("")
  const [deadlineTime, setDeadlineTime] = useState("")

  const addTask = async () => {
    console.log(title)
    console.log(deadlineDate)
    try{
    await fetch(
        `${BASE_URL}task`, {
            method: "post",
            body: JSON.stringify({
              "title" : title,
              "dedline" : deadlineDate
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        })
      } catch(err){
        console.log("Error:", err)
      }
  }

  return (
      <div className='add-task-form'>
        <p>Add new task:</p>
        <input type='text' value={title} onChange={(e)=> setTitte(e.target.value)}/>
        <div>
          <input type='date' value={deadlineDate} onChange={(e)=> setDeadlineDate(e.target.value)}/>
          <input type='time' value={deadlineTime} onChange={(e)=> setDeadlineTime(e.target.value)}/>
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
    )
  }

export default AddTaskComponent
