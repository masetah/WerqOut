import React, {Component} from 'react';

class NewExercise extends Component {
    constructor(){
        super();
        this.state = {
            category: "",
            name:"", 
            equipment:"",
            duration: "",
            directions:""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.createExercise(this.state);
        // this.setState({
        //     category: "",
        //     name:"", 
        //     equipment:"",
        //     duration: "",
        //     directions:""
        // })
    }
    render(){
        return(
            <div>
                <h1>Submit a new Excercise for the Gym</h1>
                <h3>Your bros need you man.</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="category" name="category" onChange={this.handleChange}></input>
                    <br></br>
                    <input type="text" placeholder="name" name="name" onChange={this.handleChange}></input>
                    <br></br>
                    <input type="text" placeholder="equipment" name="equipment" onChange={this.handleChange}></input>
                    <br></br>
                    <input type="text" placeholder="duration" name="duration" onChange={this.handleChange}></input>
                    <br></br>
                    <textarea placeholder="directions" name ="directions" onChange={this.handleChange}></textarea>
                    <br></br>
                    <input type="submit" value="submit to gym"></input>
                </form>   
            </div>
        )
    }
}

export default NewExercise;