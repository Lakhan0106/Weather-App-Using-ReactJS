import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icons from '../assets/search.png' 
import clear_icons from '../assets/clear.png' 
import cloud_icons from '../assets/cloudy.png' 
import drazzil_icons from '../assets/drazzil.png' 
import rain_icons from '../assets/rainy.png' 
import snow_icons from '../assets/snow.png' 
import suny_icons from '../assets/suny.png' 
import humidity_icons from '../assets/humidity.png' 

const Weather = () => {

  const [weatherData, setWeatherData]= useState(false);

    const allIcons ={
      "01d": clear_icons,
      "01n": clear_icons,
      "02d": cloud_icons,
      "02n": cloud_icons,
      "03d": cloud_icons,
      "03n": cloud_icons,
      "04d": drazzil_icons,
      "04n": drazzil_icons,
      "09d": rain_icons,
      "09n": rain_icons,
      "10d":rain_icons,
      "10n": rain_icons,
      "13d": snow_icons,
      "13n": snow_icons,
    }
     const search= async(city)=>{
       try {
         const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

         const response = await fetch(url);
         const data = await response.json();
         console.log(data);
         const icon = allIcons[data.weather[0].icon] || clear_icons;
         setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: math.floor(data.main.temp),
          location: data.name,
          icon: icon

         })


       } catch (error) {
        
       }
     }
     useEffect(()=>{
      search("London");
     },[])
  return (
    <div className='weather'>
        <div className="search-bar">
          <input type = "text" placeholder='search'/>  
          <img src={search_icons} alt=""/>
        </div>
      <img src={weatherData.icons} alt="" className='weather-icon'/>
      <p className='temperature'>{weatherData.temperature}</p>
      <p className='location'>{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icons} alt="" />
          <div>
            <p>{weatherData.humidity}</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={suny_icons} alt="" />
          <div>
            <p>{weatherData.windSpeed}</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Weather
