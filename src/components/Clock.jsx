import React, { useState, useEffect } from "react";

const Clock = () => {
    
    const person = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };

    const [human, setHuman] = useState(person);

    useEffect(() => {
        const timerID = setInterval(() => {
            tick()}, 1000);

        return () => {
            clearInterval(timerID);
        };

    });

    const tick = () => {
        return setHuman({
            fecha: human.fecha,
            edad: human.edad + 1,
            nombre: human.nombre,
            apellidos: human.apellidos
        });
    }

    return(
       <div>
           <h2>
                Hora Actual:
                {human.fecha.toLocaleTimeString()}
           </h2>
           <h3>{human.nombre} {human.apellidos}</h3>
           <h1>Edad: {human.edad}</h1>
       </div>
    )
}

export default Clock;