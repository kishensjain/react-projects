import { useEffect, useState } from 'react'

function App() {
  const [input, setInput] = useState('');
  const handleClick = (value) => {
    if(value === 'C') {
      setInput('');
    }else if(value === '=') {
      try{
        setInput(eval(input).toString());
      }catch{
        setInput('Error');
      }
    }else{
      setInput(input + value);
    }
  }

  const handleKeyDown = (event) => {
    const key = event.key;
    if (/^[0-9+\-*/.]$/.test(key)) {
      setInput((prev) => prev + key);
    } else if (key === 'Enter') {
      try {
        const result = new Function(`return ${input}`)();
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
    } else if (key === 'Backspace') {
      setInput((prev) => prev.slice(0, -1));
    } else if (key === 'Escape') {
      setInput('');
    }
  }

  useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown);

    return () =>{
      window.removeEventListener('keydown', handleKeyDown);
    }
  },[])

  const buttons = ['7', '8', '9', 'C', '4', '5', '6', '*', '1', '2', '3', '+', '0', '.', '=', '/'];
  const buttonClass = 'bg-gray-800 p-2 rounded-lg cursor-pointer hover:bg-gray-700 hover:scale-105 transition-all duration-200 w-12';

  return (
    <>
      <div className="w-full max-w-sm mx-auto mt-20 p-6 bg-black text-white rounded-2xl shadow-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Calculator</h1>
        <input
          type='text'
          className='w-full p-2 bg-gray-800  text-white rounded-2xl shadow-lg mb-4'
          value={input}
          readOnly
        />
        <div className='grid grid-cols-4 gap-4'>
          {buttons.map((btn) => (
             <button
             key={btn}
             className={`${btn === 'C' ? 'bg-red-500 hover:bg-red-600' : buttonClass}`}
             onClick={() => handleClick(btn)}
           >
            {btn}
            </button>
          ))}
        </div>
      </div>

    </>
  )
}

export default App
