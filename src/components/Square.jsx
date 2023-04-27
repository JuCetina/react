import React, { useRef } from 'react';

const Square = () => {

    const container = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const squareStyle = {
        width: '255px',
        height: '255px',
        backgroundColor: 'black'
    }

    const mySquare = useRef();

    const handleHover = () => {
        mySquare.current.style.backgroundColor = 'rgb(0,0,250)';
    }

    const handleMouseLeave = () => {
        mySquare.current.style.backgroundColor = 'rgb(0,0,0)';
    }

    const handleTwoClicks = (e) => {
        if(e.detail === 2){
            mySquare.current.style.backgroundColor = 'rgb(0,0,0)';
        }
    }

    return (
        <div style={ container }>

            <div
                style={ squareStyle }
                ref={ mySquare }
                onMouseOver={ handleHover }
                onMouseLeave={ handleMouseLeave }
                onClick={ handleTwoClicks }
            >
            </div>
        </div>
    );
}

export default Square;
