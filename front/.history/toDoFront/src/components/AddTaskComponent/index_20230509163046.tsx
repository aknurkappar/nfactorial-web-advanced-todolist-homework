import { BASE_URL } from '../../constants'
import './index.css'

function AddTaskComponent() {

  const addTask = async(task : Task)=>{
    await fetch(
        `${BASE_URL}task/`, {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
              {"title" : task.title,
              "dedline" : task.
            }
              )
        })
        console.log(isDoneState)
}

  return (
    <form className='add-task-form'>
      <p>Add new task:</p>
      <input type='text'/>
      <div>
        <input type='date'/>
        <input type='time'/>
      </div>
      <button type='submit'>Add task</button>
    </form>
  )
}

export default AddTaskComponent
