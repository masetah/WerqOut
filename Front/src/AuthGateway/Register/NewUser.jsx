import React, {Component} from 'react';

class NewUser extends Component {
    constructor(){
        super();
        this.state = {
            trainer:"",
            username:"",
            password:"",
            confpassword:"",
            about:""
        }
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    createNewUser=(e)=>{
        e.preventDefault();
        this.props.handleRegister(this.state);
    }
    
    render(){
        return(
            <div>
                <h1>You new here?</h1>
                <h3>Register here bro.</h3>
            <form onSubmit={this.createNewUser}>
                <input type="text" placeholder="are you a trainer?" name="trainer" onChange={this.handleChange}/>
                <br></br>
                <input type="text" placeholder="username" name="username" onChange={this.handleChange}/>
                <br></br>
                <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
                <br></br>
                <input type="password" placeholder="confirm password" name="confpassword" onChange={this.handleChange}/>
                <br></br>
                <textarea placeholder="Tell us about yourself" name="about" onChange={this.handleChange}/>
                <br></br>
                <input type="submit" value="Register Now"/>
            </form>
            </div>
        )
    }
}

export default NewUser;