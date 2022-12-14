import React, { useState } from 'react';

function MoodGrid(props) {
    const [hover, setHover] = useState(true);
    const [mouseY, setMouseY] = useState(0);
    const [mouseX, setMouseX] = useState(0);

    function handleMouseOut(e) {
        setHover(false);
    }

    function handleMouseOver(e) {
        setHover(true);
        setMouseX(e.clientX);
        setMouseY(e.clientY);
        console.log(e);
    }

    return (
        <section className="mood-grid-container">
            <section className="month-heading">
                <button>👈🏽</button>
                <h1>december</h1>
                <button>👉🏽</button>
            </section>
            <ol className="mood-grid" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                {props.moodData.map((item) => {
                    return (
                        <>
                            <li 
                            id={item.day + '-popup'}>{item.day}</li>
                            <div style={{ 
                                display: hover ? 'block' : 'none', 
                                top: `${mouseY}px`,
                                left: `${mouseX}px`}} 
                                className="info-popup">
                                <h5>{item.mood}</h5>
                                <p>{item.notes}</p>
                            
                            </div>
                        </>
                    )
                })}
            </ol>
        </section>
    );
}

export default MoodGrid;