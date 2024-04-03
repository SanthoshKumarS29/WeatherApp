// App.jsx
import './App.css'
import SearchBar from './components/SearchBar'
import  WeatherContext  from './components/WeatherContext'
import WeatherDisplay from './components/WeatherDisplay'

function App() {


  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 flex flex-col justify-center items-center">
    <div className="bg-white p-10 py-4 shadow-lg rounded-lg">
    <WeatherContext>
     <div className="my-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">Weather App</h1>
      <SearchBar />
      <WeatherDisplay />
     </div>
    </WeatherContext>
    </div>
    </div>
  )
}

export default App
