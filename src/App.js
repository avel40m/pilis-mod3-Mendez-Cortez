import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home.jsx";
import Details from "./routes/Details/Details";
import UbicacionCrear from "./routes/Ubicacion/UbicacionCrear";
import {datos} from './Service'
import { useContext, useEffect } from "react";
import { UbicacionContext } from "./context/UbicacionContext";

function App() {
  const {setUbicacion} = useContext(UbicacionContext);

  useEffect(() => {
    setUbicacion(datos)
  },[])

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/crear" element={<UbicacionCrear />} />
        <Route path="/ubicacion/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
