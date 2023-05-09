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
            <div key = {index} onClick={}>
            {task.title}
            </div>
        ))
      }

<div className="buttons">
                <div className="menu-buttons">
                    {sectionList && sectionList.map((item, index)=>(
                        <button key = {index} onClick={()=> {moveToSection(item)}} className={`${item.isActive ? "active" : "not-active"}`}>{item.title}</button>
                    ))}
                </div>

                <div className="modal-button">
                    {isAddModalShown && <AddModal addToDo = {addToDo}/>} 
                    <button className="add-button"
                    onClick={openAddModal}
                    >+</button>
                </div>
            </div>

            <div>
                <p className="header-text">{nowActiveSection.title}</p>
                <div className="line"></div>

                { toDoList &&
                    filteredToDoList.map((item, index) => (
                        <ToDoItem item = {item} index = {index} openTrashModal = {openTrashModal} 
                        markAsDone = {markAsDone} moveToTrash = {moveToTrash}
                        nowActiveSection = {nowActiveSection} deleteForever = {deleteForever}/>
                    ))
                }
            </div>
    </div>
  )
}

export default TaskListComponent
