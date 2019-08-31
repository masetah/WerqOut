import React, {Component} from 'react';
import ExercisesList from './ExercisesList'
import NewExercise from './NewExercise'

class ExercisesContainer extends Component {
    constructor(){
        super()
        this.state={
            exercises:[],
        }
    }
    componentDidMount(){
        console.log("component is mounting")
        this.getExcercises();
    }
    getExcercises= async () => {
        try{
            const exercises =await fetch('http://localhost:9000/api/v1/exercises');
            const parsedResponse = await exercises.json();
            console.log(parsedResponse);
            this.setState({
                exercises: parsedResponse.data
            })
        }catch(err){
            console.log(err)
        }
    }
    render(){
        return(
            <div>
                <NewExercise/>
                <ExercisesList/>
            </div>
            )
    }
}

export default ExercisesContainer;