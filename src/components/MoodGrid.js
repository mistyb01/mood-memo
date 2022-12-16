import React, { useState } from 'react';
import Tooltip from './Tooltip';

function MoodGrid(props) {
    const [hover, setHover] = useState(true);
    const [mouseY, setMouseY] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [hoveredDay, setHoveredDay] = useState(0);

    function handleMouseOut(e) {
        setHover(false);
    }

    function handleMouseOver(e) {
        if (e.target.tagName == 'LI') {
            setHover(true);
            setMouseX(e.clientX);
            setMouseY(e.clientY);
            setHoveredDay(e.target.id);
        } else {
            return;
        }
    }

    return (
        <section className="mood-grid-container">
        {hover && <Tooltip moodData={props.moodData} hoveredDay={hoveredDay} xCoord={mouseX} yCoord={mouseY}/>}
            <section className="month-heading">
                <button>👈🏽</button>
                <h1>december</h1>
                <button>👉🏽</button>
            </section>
            <ol className="mood-grid" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                {props.moodData.map((item) => {
                    return (
                        <li id={item.day} key={item.fullDate}>{item.day}</li>
                    )
                })}
            </ol>
        </section>
    
    );
}

export default MoodGrid;