import { useState } from 'react'
import SearchInput from './components/SearchInput';
import WeatherData from './components/WeatherData'
import useWeatherInfo from './hooks/useWeatherInfo';
import { useTheme } from './context/ThemeContext';
function App() {
  const [input, setInput] = useState('')
  const [search, setSearch] = useState({})
  
  const weatherInfo = useWeatherInfo(search.query)
  
  const {theme, toggleTheme} = useTheme()

  const handleSearch = ()=>{

    console.log('Searching for:', input);
    setSearch({ query: input });
  }

  return (
    <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <button onClick={toggleTheme} style={{ float: 'right', marginTop: '1rem' }}>
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
        <h1>Weather-app</h1>
        <SearchInput input={input} setInput={setInput} onSearch={handleSearch} />
        <WeatherData data={weatherInfo} />
      </div>
    </div>
  );
}

export default App
