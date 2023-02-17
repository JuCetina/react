import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';

function Componenteb({ contacto }) {

    const [conectado, setconectado] = useState(contacto.conectado);

    let handleLogout = () => {
        setconectado(!conectado);
    }

    return (
        <div>
            <p>Nombre: { contacto.nombre }</p>
            <p>Apellido: { contacto.apellido }</p>
            <p>Email: { contacto.email }</p>
            <p>{ conectado ? "Contacto En Línea" : "Contacto No Disponible" }</p>
            <button onClick = { handleLogout }>{ conectado ? "Desconectar" : "Conectar"}</button>
        </div>
    )
}

Componenteb.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default Componenteb;