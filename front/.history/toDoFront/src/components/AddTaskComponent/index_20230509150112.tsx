import './index.css'

function AddTaskComponent() {

  return (
    <form className='add-task-form'>
      <p></p>
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
