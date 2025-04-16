import {FaSearch} from 'react-icons/fa';

function SearchInput({input ,setInput, onSearch}) {
  const handleKeyDown = (e) =>{
    if(e.key === 'Enter'){
      onSearch();
    }
  }

  return (
    <div className='searchContainer'>
      <input 
        type="text"
        className='input'
        placeholder='Search here...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        />
        <button className='btn search' onClick={onSearch}>
          <FaSearch/>
        </button>
      </div>
  )
}

export default SearchInput
