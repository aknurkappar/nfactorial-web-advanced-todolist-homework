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
            <button onClick={()=>{openTrashModal(item)}}
            className="more-button"></button>

            <input type="checkbox" onChange={()=>{markAsDone(item)}} checked={item.isDone}/>
            <p className={`${item.isDone ? "done" : "todo-text"}`}>{item.title}</p>

            {nowActiveSection.name != "trash"  && item.isTrashModalShown && 
            <div className="trash-modal">
                <button onClick= {()=>{moveToTrash(item)}}>Move to Trash</button>
            </div>
            } 
                                
            {nowActiveSection.name == "trash" && item.isTrashModalShown && 
                <div className="trash-modal-in-trash">
                    <button className="delete-forever" onClick= {()=>{deleteForever(item)}}>Delete Forever</button>
                    <button className="move-back" onClick= {()=>{moveToTrash(item)}}>Move Back To To Do</button>
                </div>
            } 
        </div>
            </div>
        ))
      }

    </div>
  )
}

export default TaskListComponent
