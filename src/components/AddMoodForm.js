import React from 'react';
import {db} from '../firebase.js'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

/* function to add new task to firestore */
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'entries'), {
        name: "blah test",
        created: Timestamp.now()
      })
    } catch (err) {
      alert(err)
    }
  }

function AddMoodForm() {
    return (
        <section className="add-mood-form-container">
            <h2>add entry</h2>
            <form onSubmit={handleSubmit} className="add-mood-form">
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