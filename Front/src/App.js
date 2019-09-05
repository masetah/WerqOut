import React from 'react';
import './App.css';
import ExercisesContainer from './ExercisesContainer/ExercisesContainer'
import  AuthGateway from './AuthGateway/AuthGateway.jsx'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false, 
      username: null
    }
  }

  handleRegister = async (formData) => {
    const registerUser = await fetch('http://localhost:9000/users/register',{
      method: "POST",
      body:JSON.stringify(formData),
      // credentials:"include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const parsedResponse = await registerUser.json();
    console.log(parsedResponse)
    if(parsedResponse.status.code===201){
      console.log("SUCCESSFUL REGISTRATION");
      this.setState({
        LoggedIn: true, 
        username: parsedResponse.data.username
      })
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.state.loggedIn ?
          <ExercisesContainer/> :
          <AuthGateway handleRegister={this.handleRegister}/>
        }
      </div>
    );
  }
}

export default App;
