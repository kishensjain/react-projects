import { useEffect, useState } from "react"
import axios from "axios"

function useWeatherInfo(city) {
  const [data, setData] = useState(null)

  useEffect(()=>{
    if(!city) return
    const apiKey = VITE_WEATHER_API_KEY

    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((res)=>setData(res.data))
    .catch((err)=>{
      console.log(`Failed to fetched weather data ${err}`);
      setData(null);
    })
    console.log(data)
  },[city])

  return data;
}

export default useWeatherInfo;
