import './index.css'
import { BASE_URL } from '../../constants'
import { useEffect, useState } from 'react';

function TaskListComponent() {
    const [taskList, setTaskList] = useState([] as Task[]);

    const getAllTasks = async()=>{
        let result = await fetch(
            `${BASE_URL}task`, {
                method: "get",
            })
        const data = await result.json() as Task[]
        setTaskList(data)
    }
    useEffect(() => {
        getAllTasks()
    }, [])

  return (
    <div>
      {
        taskList && taskList.map((task, index) => (
            <div key = {index}>
            {task.title}
            <div className="to-do-item" key={index}>
            <button onClick={}
            className="more-button"></button>

            <input type="checkbox" onChange={()=>{}} checked={task.isDone}/>
            <p className={`${task.isDone ? "done" : "todo-text"}`}>{task.title}</p>
            </div>
            ))} 
                            
    </div>
  )
}

export default TaskListComponent
