import React from 'react'
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
  return (
    <div className='weather'>
        <div className="search-bar">
          <input type = "text" placeholder='search'/>  
          <img src={search_icons} alt=""/>
        </div>
      <img src={clear_icons} alt="" className='weather-icon'/>
    
    </div>
  )
}

export default Weather
