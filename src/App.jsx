import React from 'react';
import MoodGrid from './components/MoodGrid';
import AddMoodForm from './components/AddMoodForm';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <main>
        <MoodGrid/>
        <AddMoodForm/>
      </main>
    </>
  );
}

export default App;
