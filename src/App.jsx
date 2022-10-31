import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import Hours from './component/Hours'

function App() {

  const [ weather, setWeather ] = useState({});

  const [Celsius, setCelsius]=useState(true)

  useEffect (() => {

    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      axios 
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7795140fdf9069978e79ff5ffe4d9d39`)
      .then((res) => setWeather(res.data));
    }
    navigator.geolocation.getCurrentPosition(success)
   },[])

   const ChangeCelsius=()=>{
    setCelsius(!Celsius)
   }

   const climate=[]


  console.log(weather);

   let fundTime=weather.weather?.[0].icon;
   let linkFund="";

   switch (fundTime){
    case '01d':
      linkFund='https://images.pexels.com/photos/4671463/pexels-photo-4671463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      break;
    case '01n':
        linkFund='https://images.pexels.com/photos/13891178/pexels-photo-13891178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break;  
    case '02d':
      linkFund='https://images.pexels.com/photos/5069533/pexels-photo-5069533.jpeg?auto=compress&cs=tinysrgb&w=800'
      break;
    case '02n':
      linkFund='https://images.pexels.com/photos/13511276/pexels-photo-13511276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      break;
    case '03d':
      linkFund='https://images.pexels.com/photos/12262726/pexels-photo-12262726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      break;
    case '03n':
      linkFund='https://images.pexels.com/photos/12903460/pexels-photo-12903460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      break;
    case '04d':
        linkFund='https://images.pexels.com/photos/4671463/pexels-photo-4671463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break;
    case '04n':
          linkFund='https://images.pexels.com/photos/11513041/pexels-photo-11513041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          break;  
    case '09d':
        linkFund='https://images.pexels.com/photos/12907149/pexels-photo-12907149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break;
    case '09n':
        linkFund='https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '10d':
        linkFund='https://images.pexels.com/photos/2618980/pexels-photo-2618980.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '10n':
        linkFund='https://images.pexels.com/photos/1755702/pexels-photo-1755702.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
        case '11d':
        linkFund='https://images.pexels.com/photos/11408850/pexels-photo-11408850.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '11n':
        linkFund='https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '13d':
        linkFund='https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
        case '13n':
        linkFund='https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '50d':
        linkFund='https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=800'
        break;
      case '50n':
        linkFund='https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        break;
      default:
        linkFund='https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=800'
        
  }


  document.body.style=`background-image:url(${linkFund})`
 

  return (
    <>
    <Hours/>
    <div className="App">
      <h1>Wheather App</h1>
      <p className='city'><b>Ciudad {weather.name} {','} {weather.sys?.country}</b> </p>
      <div className='left'>
        <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="cloud" />
        <p>{Celsius? Math.floor((((weather.main?.temp - 273.15)* 9/5 + 32)- 32) * 5/9): Math.floor((weather.main?.temp - 273.15)* 9/5 + 32)} {Celsius? '°C':'°F'} </p>
      </div>
      <div className='law'>
        <p>"{weather.weather?.[0].description}"</p>
        <p><i className="fa-solid fa-wind"></i>{' '}<b>wind speed: </b>{weather.wind?.speed} m/s</p>
        <p><i className="fa-solid fa-cloud"></i>{' '}<b> Clouds:</b> {weather.clouds?.all}%</p>
        <p><i className="fa-solid fa-temperature-three-quarters"></i>{' '}<b>Pressure:</b> {weather.main?.pressure} mb</p>
      </div>
      <button onClick={ChangeCelsius}>Degrees {Celsius? '°C':'°F'}</button>
     
    </div>
    </>
  )
}

export default App