import React, { useState } from 'react'

function Decision() {

    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    const getRandomNumberX = () => {
        const min = -30;
        const max = 30;
        let randomX = (Math.floor(Math.random()*(max-min+1)) + min)*15;
        setTranslateX(randomX);
    };

    const getRandomNumberY = () => {
        const min = -20;
        const max = 10;
        let randomY = (Math.floor(Math.random()*(max-min+1)) + min)*15;
        setTranslateY(randomY);
    };

    const handleIt = () => {
        // Call both functions when the button is clicked
        getRandomNumberX();
        getRandomNumberY();
      };


    const displayAffection = () => {
        alert("You are my one and only Valentine. Ofcourse I had something planned for you. Get ready by 6:30!! ;)");
    };

    return (
        <>
            <div className='proposal'>
                <h1>Will you be my Valentine?</h1>
            </div>
            <div className='buttons'>
                <button className='yes-button' onClick={displayAffection}>Yes</button>
                <button className='no-button' onMouseOver={handleIt} style={{transform: `translateX(${translateX}px) translateY(${translateY}px)`,}}>No</button>
            </div>
        </>
    )
}

export default Decision;