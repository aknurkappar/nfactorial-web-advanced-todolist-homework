import './index.css'

function AddTaskComponent() {

  return (
    <form className='add-task-form'>
      <input type='text'/>
      <div>
        <input type='date'/>
        <input type='time'/>
      </div>
      <button type='submit'></button>
    </form>
  )
}

export default AddTaskComponent
