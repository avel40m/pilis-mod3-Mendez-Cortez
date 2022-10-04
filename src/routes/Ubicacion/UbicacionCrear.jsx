import React,{useContext} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UbicacionContext } from "../../context/UbicacionContext";
import './UbicacionCrear.css'

const UbicacionCrear = () => {
  const navigate = useNavigate();
  const {ubicacion,setUbicacion} = useContext(UbicacionContext)
  console.log(ubicacion);
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
    }
    setUbicacion([...ubicacion,newUbicacion]);
    navigate("/")
  }

  return (
    <div className="crear-ubicacion">
      <p className="titulo-ubicacion">Crear Ubicacion</p>
      <form className="ubicacion-form" onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Crear Ubicacion</button>
      </form>
    </div>
  );
};

export default UbicacionCrear;
