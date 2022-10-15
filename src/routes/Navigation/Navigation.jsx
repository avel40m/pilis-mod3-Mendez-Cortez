import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/LogoClim.png";
import { UserContext } from "../../context/UserContext";
import {FaPowerOff, FaSignInAlt} from 'react-icons/fa'
import "./Navigation.css";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const useStored = localStorage.getItem("currentUser");
    console.log(useStored);
  });

  const handleSingOut = () => {
    setCurrentUser(null);
  };

  return (
    <div>
      <div className="navegacion">
           
            <Link className="logo" to="/">
          
          <img src={Logo} alt="Logo web" />
        </Link>
        <div className="navegacion-link">
          {currentUser === null ? (
            <Link className="nav-link" to="/login">
              <p>Ingresar </p> <FaSignInAlt />
            </Link>
          ) : (
            <>
              <Link className="nav-link" to="/crear">
                Crear Ubicacion
              </Link>
              <Link className="nav-link" onClick={handleSingOut}>
                Cerrar Sessión <FaPowerOff />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
