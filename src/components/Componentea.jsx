import React from 'react';
import { Contacto } from '../models/contacto.class';
import Componenteb from './Componenteb';

function Componentea() {

    const datos = new Contacto("Andrea", "Pérez", "prueba@prueba.com", true);

    return (
        <div>
            <Componenteb contacto = { datos }></Componenteb>
        </div>
    )
}

export default Componentea;


