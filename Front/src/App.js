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
  handleLogin = async (formData) => {
    try{
    const loginUser = await fetch('http://localhost:9000/users/login',{

      method: "POST",
      body:JSON.stringify(formData),
      credentials:"include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const parsedResponse = await loginUser.json();
    console.log(parsedResponse, "parsedResonse")
    if(parsedResponse.status.code===201){
      console.log("SUCCESSFUL login");
      this.setState({
        loggedIn: true, 
        username: parsedResponse.data.username
      })
    }
  }catch(err){
    console.log(err)
  }
}
  handleRegister = async (formData) => {
    try{
    const registerUser = await fetch('http://localhost:9000/users/register',{
      method: "POST",
      body:JSON.stringify(formData),
      credentials:"include",
      headers: {
        // "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
    const parsedResponse = await registerUser.json();
    console.log(parsedResponse, "parsedResonse")
    if(parsedResponse.status.code===201){
      console.log("SUCCESSFUL REGISTRATION");
      this.setState({
        loggedIn: true, 
        username: parsedResponse.data.username
      })
    }
  }catch(err){
    console.log(err)
  }
}

  render(){
    return (
      <div className="App">
        {
          this.state.loggedIn ?
          <ExercisesContainer/> :
          <AuthGateway handleRegister={this.handleRegister} handleLogin={this.handleLogin}/>
        }
      </div>
    );
  }
}

export default App;
