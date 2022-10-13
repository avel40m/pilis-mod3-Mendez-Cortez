import React,{useContext} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UbicacionContext } from "../../context/UbicacionContext";
import { UserContext } from "../../context/UserContext";
import './UbicacionCrear.css';
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "¿Confirma la creación de la ubicación ?",
      text: "Su registro será almacenado",
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "Cancelar",
      denyButtonColor:"#5F6F94",
      confirmButtonText: "Confirmar",
      confirmButtonColor: "#25316D",
    }).then((response) => {
      if (response.isConfirmed) {
        const newUbicacion = {
          id: ubicacion.length + 1,
          nombre: data.ubicacionName,
          latitud: data.latitud,
          longitud: data.longitud,
          imagen: data.imagen
        }
        setUbicacion([...ubicacion,newUbicacion]);
        navigate("/")
        Swal.fire("La ubicación se ha sido creada", "Exitosamente", "success");
      } else {
        Swal.fire("Puede recargar datos nuevamente ...", "La ubicación no se ha guardado ", "danger");
      }
    });
  };
    
  
  
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
