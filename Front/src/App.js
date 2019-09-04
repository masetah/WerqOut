import React from 'react';
import './App.css';
import ExercisesContainer from './ExercisesContainer/ExercisesContainer'
import UsersContainer from './UsersContainer/UsersContainer'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false, 
      username: null
    }
  }
  render(){
    return (
      <div className="App">
        {
          this.state.loggedIn ?
          <ExercisesContainer/> :
          <UsersContainer/>
        }
      </div>
    );
  }
}

export default App;
