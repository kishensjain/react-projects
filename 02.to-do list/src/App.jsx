import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])
  
  const handleInput = () =>{
    if (input.trim() !== '') {
      console.log('Task added:', input)
      setTasks([...tasks, input])
      setInput('')
    } else {
      prompt('Please enter a task!')
    }
  }

  return (
    <>
      <h1>To-Do List</h1>
      <div className='container'>
        <input 
          type="text" 
          placeholder='Add a task...'
          className="input"
          onChange={(e)=> setInput(e.target.value)} 
          autoFocus
          />
          <button 
            className='btn add'
            onClick={handleInput}
            >Add</button>
      </div>
      <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
    </>
  )
}

export default App
