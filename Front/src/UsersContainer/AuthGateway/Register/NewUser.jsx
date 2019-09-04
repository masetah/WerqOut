import React, {Component} from 'react';

class NewUser extends Component {
    render(){
        return(
            <div>
                <h1>You new here?</h1>
                <h3>Register here bro.</h3>
            <form>
                <input type="radio" name="trainer" value="true"/>
                <br></br>
                <input type="radio" name="trainer" value="false"/>
                <br></br>
                <input type="text" placeholder="username" name="username"/>
                <br></br>
                <input type="password" placeholder="password" name="password"/>
                <br></br>
                <input type="password" placeholder="confirm password" name="confpassword"/>
                <br></br>
                <input type="textarea" placeholder="Tell us about yourself" name="about"/>
                <br></br>
                <input type="submit" value="Register Now"/>
            </form>
            </div>
        )
    }

}

export default NewUser;