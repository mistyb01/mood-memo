import React from 'react';

function Tooltip(props) {
    return (
        <div 
            style={{top: `${props.yCoord}px`, left: `${props.xCoord}px`}}
            className="info-popup">
            {props.moodData.map((item) => {
                if (item.day == props.hoveredDay) {
                    return (
                        <div className='tooltip-container' key={item.fullDate}>
                            <h3>{item.fullDate.toDateString()}</h3>
                            {(item.mood == "" && item.notes == "") ?
                                <p>no entry.</p> :
                                <strong>{item.mood}</strong>
                            }
                            <p></p>
                        </div>
                    );
                }
            })}
        </div>  
    );
}

export default Tooltip;