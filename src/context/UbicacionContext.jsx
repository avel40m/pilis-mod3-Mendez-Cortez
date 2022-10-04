import { createContext,useState } from "react";


export const UbicacionContext = createContext({
    ubicacion:[],
    setUbicacion: () => {}
}) 

export const UbicacionProvider = ({children}) => {
    const [ubicacion,setUbicacion] = useState([]);

    const value = {ubicacion,setUbicacion};

    return <UbicacionContext.Provider value={value}>{children}</UbicacionContext.Provider>
}