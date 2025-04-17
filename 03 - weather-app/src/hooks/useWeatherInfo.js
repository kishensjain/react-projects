import { useEffect, useState } from "react"
import axios from "axios"


function useWeatherInfo(city) {
  const [data, setData] = useState({})

  useEffect(()=>{
    if(!city) return
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY

    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => {
      console.log("Fetched weather data:", res.data);
      setData(res.data);
    })
    
    .catch((err)=>{
      console.log(`Failed to fetched weather data ${err}`);
      setData(null);
    })
  },[city])

  return data;
}

export default useWeatherInfo;
