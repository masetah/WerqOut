import React, {Component} from 'react';

class NewUser extends Component {
    render(){
        return(
            <div>
                <h1>You new here?</h1>
                <h3>Register here bro.</h3>
            <form>
                <input type="text" placeholder="username"></input>
                <br></br>
                <input type="password" placeholder="password"></input>
                <br></br>
                <input type="password" placeholder="confirm password"></input>
                <br></br>
                <input type="textarea" placeholder="What are your fitness goals?"></input>
                <br></br>
                <input type="submit" value="Register Now"></input>
            </form>
            </div>
        )
    }

}

export default NewUser;