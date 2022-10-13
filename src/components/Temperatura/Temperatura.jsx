import React, { useContext, useEffect } from "react";
import {getTemperature} from '../../Service'
//import { WiCelsius,WiStrongWind } from "react-icons/wi";
import './Temperatura.css'
import { TemperaturaContext } from "../../context/TemperaturaContext";
import {FaWind} from "react-icons/fa";
import {FaTemperatureLow} from "react-icons/fa"

const Temperatura = ({ latitud, longitud }) => {
  const {temperatura,setTemperatura} = useContext(TemperaturaContext)
  
  useEffect(() => {
    getTemperature(latitud, longitud)
                  .then(data => setTemperatura(data.current_weather))
                  .catch(err => console.error(err));
    
  }, []);

  return (
    <div className="card-clima">
      <p>Temperatura C°: {temperatura.temperature} < FaTemperatureLow /></p>
      
      <p>Viento: {temperatura.windspeed} <FaWind /></p>
      
    </div>
  )
};

export default Temperatura;
