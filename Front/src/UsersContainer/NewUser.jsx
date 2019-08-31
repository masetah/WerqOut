import React, {Component} from 'react';

class NewUser extends Component {
    render(){
        return(
            <div>
                <h1>You new here?</h1>
                <h3>Register here bro.</h3>
            <form>
                <input type="radio" name="trainer" value="true"></input>
                <br></br>
                <input type="radio" name="trainer" value="false"></input>
                <br></br>
                <input type="text" placeholder="username" name="username"></input>
                <br></br>
                <input type="password" placeholder="password" name="password"></input>
                <br></br>
                <input type="password" placeholder="confirm password" name="confpassword"></input>
                <br></br>
                <input type="textarea" placeholder="Tell us about yourself" name="about"></input>
                <br></br>
                <input type="submit" value="Register Now"></input>
            </form>
            </div>
        )
    }

}

export default NewUser;