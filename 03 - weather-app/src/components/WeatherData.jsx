import React from 'react'

function WeatherData({data}) {
  if(!data || Object.keys(data).length === 0){
    return <p>🔍 No weather data to display yet.</p>;
  }

  if (data === null) {
    return <p>❌ Failed to fetch weather data. Please try again.</p>;
  }

  return (
    <div className='weatherData'>
      <p>📍 {data.name}</p>
    </div>
  )
}

export default WeatherData
