import React, { useContext } from "react";
import Temperatura from "../../components/Temperatura/Temperatura";
import { UbicacionContext } from "../../context/UbicacionContext";
import "./Home.css";
import { getTemperature } from "../../Service";
//import { FaTimes,FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {ImEyePlus} from "react-icons/im";
import {MdDeleteForever} from "react-icons/md";


const Home = () => {
  const { ubicacion, setUbicacion } = useContext(UbicacionContext);

  const handleDelete = (id) => {
    
    Swal.fire({
      title: "A continuación se borrará el registro del clima ...",
      text: "Confirma su solicitud",
      icon: "question",
      showDenyButton: true,
      denyButtonText: "Cancelar",
      denyButtonColor: "#5F6F94",
      confirmButtonText: "Confirmar",
      confirmButtonColor: "#25316D",
    }).then((response) => {
      if (response.isConfirmed) {
        const newArray = ubicacion.filter((u) => u.id !== id);
        setUbicacion(newArray);
        Swal.fire("El registro del clima ha sido borrado !", "Exitosamente", "success");
      } else {
        Swal.fire("El registro se conservará ", "Acción Cancelada", "warning");
      }
    });

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
                <MdDeleteForever onClick={() => handleDelete(dato.id)} />
              </div>
              <h2 className="card-lugar">{dato.nombre}</h2>
              <p className="stilo1">Latitud: {dato.latitud} </p>
              <p className="stilo1"> Longitud: {dato.longitud}</p>
              <Temperatura latitud={dato.latitud} longitud={dato.longitud} />
              <Link className="see-more" to={`/ubicacion/${dato.id}`}>
                <small>Ver mas ...</small><ImEyePlus />
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
