import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <div className="navegacion">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo web" />
        </Link>
        <div className="navegacion-link">
          <Link className="nav-link" to="/crear">
            Crear Ubicacion
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
