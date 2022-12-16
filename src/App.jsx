import React, { useState, useEffect } from 'react';
import MoodGrid from './components/MoodGrid';
import AddMoodForm from './components/AddMoodForm';
import Header from './components/Header';

import {collection, query, orderBy, onSnapshot, addDoc, Firestore} from "firebase/firestore"

import {db} from './firebase'

// creating default data
function getDaysInMonthUTC(month, year) {
  var date = new Date(year, month);
  var days = [];
  while (date.getUTCMonth() === month) {
    days.push(new Date(date));
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return days;
}

let currMonthDays = getDaysInMonthUTC(11, 2022);
const MOCK = currMonthDays.map((day) => ({fullDate: day, day: day.getDate(), mood: "", notes: ""}));

function App() {
  const [moodEntries, setMoodEntries] = useState([]);  

// first, retrive data from firebase, and update moodEntries to that value.
useEffect(() => {
  const q = query(collection(db, 'entries'));
  onSnapshot(q, (querySnapshot) => {
    setMoodEntries(querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    })));
    console.log(querySnapshot.size)
    if (querySnapshot.empty) {
      console.log('empty!')
      uploadDefaultData();
    }
  });
}, []);

const uploadDefaultData = async () => {
    try {
      MOCK.map((item) => {
        addDoc(collection(db, 'entries'), {
          item
        })
      })
    } catch (err) {
      alert(err)
    }
}

  return (
    <>
      <Header/>
      <main>
        <MoodGrid moodData={MOCK}/>
        <AddMoodForm/>
      </main>
    </>
  );
}

export default App;
