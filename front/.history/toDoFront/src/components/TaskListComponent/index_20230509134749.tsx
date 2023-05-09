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
        taskList.map(task => (
            task
        ))
      }
    </div>
  )
}

export default TaskListComponent
