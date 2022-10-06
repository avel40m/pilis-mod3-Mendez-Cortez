import React, { useContext } from "react";
import Temperatura from "../../components/Temperatura/Temperatura";
import { UbicacionContext } from "../../context/UbicacionContext";
import "./Home.css";
import { getTemperature } from "../../Service";
import { FaTimes,FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const { ubicacion, setUbicacion } = useContext(UbicacionContext);

  const handleDelete = (id) => {
    const newArray = ubicacion.filter((u) => u.id !== id);
    setUbicacion(newArray);
  };

  const NoHayDatos = () => {
    return <h1 className="sin-datos">No existe datos para mostrar</h1>;
  };
  
  return (
    <>
      <h1 className="title">Listado de clima</h1>
      {ubicacion.length > 0 ? (
        <div className="card">
          {ubicacion.map((dato) => (
            <div key={dato.id} className="card-body">
              <div className="card-icon">
                <FaTimes onClick={() => handleDelete(dato.id)} />
              </div>
              <h2 className="card-lugar">{dato.nombre}</h2>
              <p>Latitud: {dato.latitud} </p>
              <p> Longitud: {dato.longitud}</p>
              <Temperatura latitud={dato.latitud} longitud={dato.longitud} />
              <Link className="see-more" to={`/ubicacion/${dato.id}`}>
                <FaRegEye />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <NoHayDatos />
      )}
    </>
  );
};

export default Home;
