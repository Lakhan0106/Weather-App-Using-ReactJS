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
      <p className='temperature'>16 deg</p>
      <p className='location'>London</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icons} alt="" />
          <div>
            <p>91 %</p>
            <span>humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={suny_icons} alt="" />
          <div>
            <p>91 %</p>
            <span>suny</span>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Weather
