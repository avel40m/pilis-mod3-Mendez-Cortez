import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TemperaturaProvider } from "./context/TemperaturaContext";
import { UbicacionProvider } from "./context/UbicacionContext";
import { UserProvider } from "./context/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <UbicacionProvider>
          <TemperaturaProvider>
            <App />
          </TemperaturaProvider>
        </UbicacionProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
