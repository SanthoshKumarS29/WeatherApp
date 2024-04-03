// weatherContext.jsx
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Weather = createContext()


const WeatherContext = ({children}) => {

    const [weatherData,setWeatherData]=useState('')
    const [loading,setLoading]=useState('')
    const [error,setError]=useState('')

    useEffect(()=>{
        const fetchWeatherData = async ()=>{
            try{
                const response = await fetch(
                    'https://api.openweathermap.org/data/2.5/weather?q=London&appid=c3f6c65f7f333648bcb91fab77e32c3f'               
                 )
                if (!response.ok){
                    throw new Error('Failed to Fetch Weather Data')
                }
                const data = await response.json()
                setWeatherData(data)
                setLoading(false)
            } catch (error){
                setError(error.message)
                setLoading(false)
            }
        }
        fetchWeatherData()
    },[])
  return (
    <Weather.Provider value={{weatherData,loading,error,setLoading,setError,setWeatherData}}>
      {children}
    </Weather.Provider>
  )
}

export default WeatherContext
