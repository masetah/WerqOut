import React, {Component} from 'react';


class NewExercise extends Component {
    
    render(){
        return(
            <div>
                <h1>Submit a new Excercise for the Gym</h1>
                <h3>Your bros need you man.</h3>
                <form>
                    <input type="text" placeholder="category" name="category"></input>
                    <br></br>
                    <input type="text" placeholder="name" name="name"></input>
                    <br></br>
                    <input type="text" placeholder="equipment" name="equipment"></input>
                    <br></br>
                    <input type="text" placeholder="duration" name="duration"></input>
                    <br></br>
                    <input type="text" placeholder="directions" name ="directions"></input>
                    <br></br>
                    <input type="submit" value="submit to gym"></input>
                </form>   
            </div>
        )
    }
}

export default NewExercise;