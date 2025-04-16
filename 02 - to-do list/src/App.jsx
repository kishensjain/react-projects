import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";


function App() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState(()=>{
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
   });

  const addTask = () =>{
    if(input.trim()){
      setTasks([...tasks, input])
      setInput("")
    }else{
      alert("Task cannot be empty!")
    }
  }

  const removeTask = (index) =>{
    setTasks(tasks.filter((_,i)=>i !== index));
  }

  const updateTask = (index, newText) =>{
    const updated = [...tasks];
    updated[index] = newText
    setTasks(updated);
  }

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskInput input = {input} setInput = {setInput} onAdd = {addTask} />
      <TaskList  tasks={tasks} onRemove={removeTask} onUpdate={updateTask} />
    </div>
  );
}

export default App;
