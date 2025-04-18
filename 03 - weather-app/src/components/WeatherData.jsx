import React from 'react'

function WeatherData({data}) {
  if(!data || Object.keys(data).length === 0){
    return <p className='noData'>🔍 No weather data to display yet.</p>;
  }

  const{
    name,
    weather = [],
    main = {},
    wind = {}
  } = data;

  const description = weather[0].description ?? 'N/A';
  const iconCode = weather[0]?.icon;
  const iconUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : null;
  const temperature = main.temp ?? 'N/A';
  const humidity = main.humidity ?? 'N/A';
  const windSpeed = wind.speed ?? 'N/A';

  return (
    <section className='weatherData'>
      {/* <p><strong className='label'>📍City: </strong>{name}</p> */}
      <h2>🌦️ Weather in {name}</h2>
      {iconUrl && (
        <img
          src={iconUrl}
          alt={description}
          className="weather-icon"
        />
      )}
      <p><strong className='label'>🌤️ Weather: </strong>{description}</p>
      <p><strong className='label'>🌡️ Temperature: </strong>{temperature} °C</p>
      <p><strong className='label'>💧 Humidity: </strong>{humidity} %</p>
      <p><strong className='label'>💨 Wind speed: </strong>{windSpeed} m/s</p>
    </section>
  )
}

export default WeatherData
