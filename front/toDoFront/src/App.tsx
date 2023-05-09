import './App.css'
import { Routes, Route,} from "react-router-dom";
import TaskListComponent from './components/TaskListComponent';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<TaskListComponent />}/>
        <Route path="/task" element={<TaskListComponent />}/>
        <Route/>
      </Routes>
    </>
  )
}

export default App
