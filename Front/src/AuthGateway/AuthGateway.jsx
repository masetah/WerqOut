import React, {Component} from 'react';
import NewUser from './Register/NewUser';
import Login from './login/login';

class AuthGateway extends Component {
    constructor(){
        super();
        }
        render(){
            return(
                <div>
                    <Login handleLogin={this.props.handleLogin}/>
                    <NewUser handleRegister={this.props.handleRegister}/>
                </div>
            )
        }
    }

export default AuthGateway;
