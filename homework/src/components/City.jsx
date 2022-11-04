import React from 'react'
import './City.css'

function City({city}) {
    if(!city) {
      alert('La ciudad no eciste'); 
      return (<div>La ciudad no existe</div>)
    }
  return (
    <div className="ciudad">
                <div className="todo">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>


  )
}

export default City