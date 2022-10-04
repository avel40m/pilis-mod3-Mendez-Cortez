import { useState,createContext } from "react";

export const TemperaturaContext = createContext({
    temperatura:[],
    setTemperatura: () => {}
})

export const TemperaturaProvider = ({ children }) => {
    const [temperatura, setTemperatura] = useState([]);
    const  value = {temperatura,setTemperatura};

    return <TemperaturaContext.Provider value={value}>{children}</TemperaturaContext.Provider>
}