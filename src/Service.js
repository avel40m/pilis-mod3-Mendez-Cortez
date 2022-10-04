export const datos = [
    {
        id:1,
        nombre: 'San salvador de Jujuy',
        latitud: "-24.2052574",
        longitud: "-65.3405747",
        temperatura: '',
        viento:'',
    },
    {
        id:2,
        nombre: 'Lib. Gral. San Martín',
        latitud: -23.8062329,
        longitud: -64.7932178,
        temperatura: '',
        viento:'',

    },
    {
        id:3,
        nombre: 'Salta capital',
        latitud: -24.7959127,
        longitud: -65.5006695,
        temperatura: '',
        viento:'',

    }
]

export const getTemperature = async (lat,log) => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${lat}&longitude=${log}&timezone=America/Argentina/Jujuy`)
        return response.json();
    } catch (error) {
        console.error(error);
    }
}
