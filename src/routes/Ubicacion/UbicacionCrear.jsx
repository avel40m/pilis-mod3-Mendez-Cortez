import React,{useContext} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UbicacionContext } from "../../context/UbicacionContext";
import { UserContext } from "../../context/UserContext";
import './UbicacionCrear.css'

const UbicacionCrear = () => {
  const navigate = useNavigate();
  const {ubicacion,setUbicacion} = useContext(UbicacionContext)
  const {currentUser} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    const newUbicacion = {
      id: ubicacion.length + 1,
      nombre: data.ubicacionName,
      latitud: data.latitud,
      longitud: data.longitud,
      imagen: data.imagen
    }
    setUbicacion([...ubicacion,newUbicacion]);
    navigate("/")
  }
  
  return (
    <div className="crear-ubicacion">
      {
        (currentUser === null) ?
        <div className="not-permission">
        <h1>403</h1>
        <p>Forbbiden</p>
        <span>El acceso fue denegado</span>
        </div>
        :
        
      <form className="ubicacion-form" onSubmit={handleSubmit(onSubmit)}>
        <p className="titulo-ubicacion">Crear Ubicacion</p>
        <input
          className="input-form"
          type="text"
          placeholder="Ingresar ubicacion"
          {...register("ubicacionName", {
            required: "Debe Escribir una ubicacion",
            maxLength: 21,
          })}
        />
        <span>{errors.ubicacionName?.message}</span>
        <input
          className="input-form"
          type="text"
          placeholder="Ingrese longitud"
          {...register("longitud", {
            required: "Debe ingresar el valor de la longitud",
          })}
        />
        <span>{errors.longitud?.message}</span>
        <input
          className="input-form"
          type="text"
          placeholder="Ingrese latitud"
          {...register("latitud", {
            required: "Debe ingresar el valor de la latitud"
          })}
        />
        <span>{errors.latitud?.message}</span>
        <input
          className="input-form"
          type="text"
          placeholder="Ingresar una URL"
          {...register("imagen", {
            required: "Debe URL de imagen"
          })}
        />
        <span>{errors.imagen?.message}</span>
        <button type="submit">Crear Ubicacion</button>
      </form>
      }
    </div>
  );
};

export default UbicacionCrear;
