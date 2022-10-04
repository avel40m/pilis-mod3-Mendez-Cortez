import React, {useContext} from 'react'
import './Details.css'
import {useParams,Link} from 'react-router-dom'
import {UbicacionContext} from '../../context/UbicacionContext'
import {FaArrowLeft} from 'react-icons/fa'
const Details = () => {
  const {id} = useParams()
  const {ubicacion} = useContext(UbicacionContext)    

  const arreglo = ubicacion.filter(x => x.id === parseInt(id))
  console.log(arreglo[0]);

  return (
    <div className='details'>
      <div className="details-title">
        <h1>{arreglo[0].nombre}</h1> 
        <img src={arreglo[0].imagen} alt='imagen' />     
      </div>
      <div className="details-body">
        <h2>Ubicacion</h2>
        <p>Longitud: {arreglo[0].longitud}</p>
        <p>Latitud: {arreglo[0].latitud}</p>
      </div>
      <div className="details-footer">
        <Link to={"/"}>
          <FaArrowLeft /> Volver
        </Link>
      </div>
    </div>
  )
}
export default Details
