import { BASE_URL } from '../../constants'
import './index.css'

function AddTaskComponent() {

  [newTask, setNewTask] = usesate({})

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
        console.log(task)
}

  return (
    <form className='add-task-form'>
      <p>Add new task:</p>
      <input type='text'/>
      <div>
        <input type='date' value={}/>
        <input type='time'/>
      </div>
      <button type='submit' onSubmit={addTask(task)}>Add task</button>
    </form>
  )
}

export default AddTaskComponent
