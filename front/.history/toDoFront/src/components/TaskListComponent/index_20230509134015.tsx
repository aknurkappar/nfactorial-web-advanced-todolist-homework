import './index.css'
import { BASE_URL } from '../../constants'
import { useEffect, useState } from 'react';

function TaskListComponent() {
    const [taskList, setTaskList] = useState(null);

    const getAllTasks = async()=>{
        let result = await fetch(
            `${BASE_URL}task`, {
                method: "get",
            })
        result = await result.json();
        console.log();

    }
    useEffect(() => {
        getAllTasks()
    }, [])

  return (
    <div>
      
    </div>
  )
}

export default TaskListComponent
