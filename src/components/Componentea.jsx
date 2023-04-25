import React from 'react';
import { Contacto } from '../models/contacto.class';
import ComponenteB from './ComponenteB';

function ComponenteA() {

    const datos = new Contacto("Andrea", "Pérez", "prueba@prueba.com", true);

    return (
        <div>
            <ComponenteB contacto = { datos }></ComponenteB>
        </div>
    )
}

export default ComponenteA;


