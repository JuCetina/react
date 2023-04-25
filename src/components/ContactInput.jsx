import React, { useRef } from 'react';

const ContactInput = ({ create }) => {

    const inputText = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: inputText.current.value,
            online: true,
        }

        create(user);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Escribe el nombre"
                ref={inputText}
            />
            <button>Crear Contacto</button>
        </form>
    )
}

export default ContactInput;