import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import './Login.css'

const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("currentUser", JSON.stringify(data));
    setCurrentUser(data);
    navigate("/");
  };

  return (
    <div className="formulario">
      <form className="formulario-login" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" 
        placeholder="Usuario" 
        className="input-form" 
        {...register('username',{
            required:'Complete el campo',
            minLength: {
                minLength: 4,
                message:'El campo debe cumplir con un minimo de 4 caracteres'
            }
        })}/>
        <p>{errors.username?.message}</p>
        <input type="password" 
        placeholder="Contraseña" 
        className="input-form" 
        {...register('password',{
            required:'Complete el campo',
            minLength: {
                minLength: 4,
                message:'El campo debe cumplir con un minimo de 4 caracteres'
            }
        })}/>
        <p>{errors.password?.message}</p>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
