import { useState } from 'react'
import SearchInput from './components/SearchInput';
import WeatherData from './components/WeatherData'
import useWeatherInfo from './hooks/useWeatherInfo';
function App() {
  const [input, setInput] = useState('')
  const [search, setSearch] = useState({})

  const weatherInfo = useWeatherInfo(input)
  const options = Object.keys(weatherInfo)

  const handleSearch = ()=>{

    console.log('Searching for:', input);
    setSearch({ query: input });
  }

  return (
    <>
      <div className='container'>
        <h1>Weather-app</h1>
        <SearchInput input = {input} setInput ={setInput}  onSearch={handleSearch}/>
        <WeatherData search = {search}/>
      </div>
    </>
  )
}

export default App
