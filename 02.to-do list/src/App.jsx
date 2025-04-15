import { useEffect, useState } from "react";
import {FaTrash} from 'react-icons/fa'

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(()=>{
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
   });

  const handleInput = () => {
    if (input.trim() !== "") {
      console.log("Task added:", input);
      setTasks([...tasks, input]);
      setInput("");
    } else {
      alert("Please enter a task!");
    }
  };

  const handleRemove = (idx) => {
    setTasks(tasks.filter((_, index) => index !== idx));
  };

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Add a task..."
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        <button className="btn add" onClick={handleInput}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button 
              className="btn remove" 
              onClick={() => handleRemove(index)}>
              <FaTrash />
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
