import React from 'react';
import './App.css';
import ExercisesContainer from './ExercisesContainer/ExercisesContainer'
import UsersContainer from './UsersContainer/UsersContainer'

function App() {
  return (
    <div className="App">
      <UsersContainer/>
      <ExercisesContainer/>
    </div>
  );
}

export default App;
