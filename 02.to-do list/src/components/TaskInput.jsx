function TaskInput({input, setInput, onAdd}){

  const handleKeyDown = (e) =>{
    if(e.key === 'Enter') onAdd();
  }

  return(
    <div className="inputContainer">
      <input 
        type="text"
        placeholder="Add a task..."
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        />
        <button className="btn add" onClick={onAdd}>
          Add
        </button>
    </div>
  )
}

export default TaskInput