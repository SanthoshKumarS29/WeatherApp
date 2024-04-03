// SearchBar .jsx
import React, { useContext, useState } from 'react'
import { Weather } from './WeatherContext'

const SearchBar = () => {

    const [query,setQuery] = useState('')
    const {setWeatherData,setLoading,setError} = useContext(Weather)

    const handlesearch = async ()=>{
        setLoading(true)
        setError(null)

        try{
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=c3f6c65f7f333648bcb91fab77e32c3f`
            )
            if (!response.ok){
                throw new Error('Failed to fetch weather data')
            }
            const data = await response.json()
            setWeatherData(data)
        } catch (error){
            setError(error.message)
        }
        setLoading(false)
    }
  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Enter city or Zip Code' className="px-4 py-2 border border-gray-300 rounded-md mb-2 w-full max-w-xs mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button onClick={handlesearch} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Search</button>
    </div>
  )
}

export default SearchBar
