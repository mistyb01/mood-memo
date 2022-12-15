import React from 'react';

function Tooltip(props) {
    return (
        <div 
            style={{top: `${props.yCoord}px`, left: `${props.xCoord}px`}}
            className="info-popup">
            {props.moodData.map((item) => {
                if (item.day == props.hoveredDay) {
                    return (
                        <>
                            <h3>{item.fullDate.toDateString()}</h3>
                            <p><strong>mood</strong> {item.mood}</p>
                            <p>{item.notes}</p>
                        </>
                    );
                }
            })}
        </div>  
    );
}

export default Tooltip;