import { BASE_URL } from '../../constants'
import './index.css'

function AddTaskComponent() {

  const addtask = async(id : String, isDone : Boolean)=>{
    const isDoneState = !isDone
    await fetch(
        `${BASE_URL}task/`, {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"isDone" : isDoneState})
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
