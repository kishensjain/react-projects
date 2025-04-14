import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(prevCount=>prevCount +1);
  }
  const decrement = () =>{
    setCount(prevCount=>prevCount -1);
  }
  const reset = () =>{
    setCount(0)
  }

  return (
    <>
      <h1>Count is {count}</h1>
     <div className='container'>
      <button className='btn' onClick={increment} aria-label="Increment counter">Increment</button>
      <button className='btn' onClick={reset} aria-label="Reset counter">Reset</button>
      <button className='btn' onClick={decrement} aria-label="Decrement counter">Decrement</button>
     </div> 
    </>
  )
}

export default App
