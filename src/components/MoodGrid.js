import React from 'react';

function MoodGrid(props) {
    return (
        <section className="mood-grid-container">
            <section className="month-heading">
                <button>👈🏽</button>
                <h1>december</h1>
                <button>👉🏽</button>
            </section>
            <ol className="mood-grid">
                {props.moodData.map((item) => {
                    return (
                        <li>{item.day}</li>
                    )
                })}
            </ol>
        </section>
    );
}

export default MoodGrid;