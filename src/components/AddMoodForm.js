import React from 'react';

function AddMoodForm() {
    return (
        <section className="add-mood-form-container">
            <h2>add entry</h2>
            <form className="add-mood-form">
                <label>
                    date
                    <input type="date"/>
                </label>
                <label>
                    mood
                    <select name="mood">
                        <option value="content">content</option>
                        <option value="moody">moody</option>
                        <option value="feisty">feisty</option>
                    </select>
                </label>
                <label>
                    notes
                    <input type="textarea"/>
                </label>
        <input type="submit" value="Submit" />

            </form>
        </section>
    )
}

export default AddMoodForm;