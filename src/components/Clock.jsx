import React, { useState, suseEffect } from "react";

const Clock = () => {
    
    const person = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };

    const [human, setHuman] = useState(person);

    useEffect(() => {
        const timerID = setInterval (
             setHuman(human.edad = human.edad + 1), 1000
        );
        return () => {
            clearInterval (timerID);
        };
    }, [human]);

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