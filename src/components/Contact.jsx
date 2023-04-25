import React from 'react';

const Contact = ({ user, name, online, remove, connected }) => {

    const contactStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const onlineStyle = {
        margin: '10px 5px',
        padding: '5px',
        backgroundColor : 'green',
        color: 'white',
        fontWeight: '600'
    }

    const offlineStyle = {
        margin: '10px 5px',
        padding: '5px',
        backgroundColor : 'red',
        color: 'white',
        fontWeight: '600'
    }

    return(
        <div style={ contactStyles }>
            <p style={{ margin: '10px 5px' }}>{ name }</p>
            <p style={ online ? onlineStyle : offlineStyle }>{ online ? 'Conectado' : 'Desconectado' }</p>

            <button 
                style={{ margin: '10px 5px' }}
                onClick={() => connected(user)}>
                    { online ? 'Desconectar' : 'Conectar' }
            </button>

            <button 
                style={{ margin: '10px 5px' }}
                onClick={() => remove(user)}>
                    Eliminar
            </button>
        </div>
    )
}

export default Contact;