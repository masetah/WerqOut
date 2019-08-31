import React, {Component} from 'react';
import NewUser from './NewUser'

class UsersContainer extends Component {
    constructor(){
        super()
        this.state={
            users:[],
        }
    }
    componentDidMount(){
        console.log("component is mounting")
        this.getUsers();
    }
    getUsers= async () => {
        try{
            const users =await fetch();
            const parsedResponse = await users.json("http://localhost:9000/user");
            console.log(parsedResponse);
            this.setState({
                users: parsedResponse.data
            })
        }catch(err){
            console.log(err)
        }
    }
    render(){
        return(
            <div>
                <h1>Its Time to Werq Out</h1>
                <form>
                    <h3>Login here</h3>
                    <input type="text" placeholder="username"></input>
                    <br></br>
                    <input type="password" placeholder="password"></input>
                    <br></br>
                    <input type="submit" value="Login"></input>
                </form>
                <NewUser/>
             </div>   
            )
    }
}

export default UsersContainer;