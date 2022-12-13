import React from 'react';
import MoodGrid from './components/MoodGrid';
import AddMoodForm from './components/AddMoodForm';
import Header from './components/Header';

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
console.log(currMonthDays)

const MOCK = currMonthDays.map((day) => ({fullDate: day, day: day.getDate(), mood: "no mood", notes: "no note"}));
console.log(MOCK);


function App() {
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
