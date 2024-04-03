// WeatherDisplay.jsx

import React, { useContext } from 'react'
import { Weather } from './WeatherContext'

const WeatherDisplay = () => {
    const { weatherData,loading,error} = useContext(Weather)

    if (loading){
        return <div className="text-center text-gray-800">Loading...</div>

    }
    if (error){
        return <div className="text-center text-red-500">Error: {error}</div>
    }
    if (!weatherData){
        return null
    }
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold text-gray-800">{weatherData.name}</h2>
      <p className='text-lg text-gray-800 uppercase font-mono mt-1'>{weatherData.weather[0].description}</p>
      <p className='text-lg text-gray-800'>Temperature: {weatherData.main.temp}°C</p>
      <p className='text-lg text-gray-800'>Humidity:{weatherData.main.humidity}%</p>
    </div>
  )
}

export default WeatherDisplay
