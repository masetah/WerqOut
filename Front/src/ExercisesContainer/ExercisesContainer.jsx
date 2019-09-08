import React, {Component} from 'react';
import ExercisesList from './ExercisesList'
import NewExercise from './NewExercise'
import Navigation from '../Navbar/Navigation'

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
    createExercise = async (formData) => {
        console.log(formData)
        try{
            const newExercise = await fetch('http://localhost:9000/api/v1/exercises',{
                method: "POST",
                credentials: "include",
                body:JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json",
                }
            })
        const parsedResponse = await newExercise.json();
        console.log(parsedResponse)
        if(parsedResponse.status.code ===201){
            this.setState({
                exercises: [...this.state.exercises, parsedResponse.data]
            })
        }
        }catch(err){
            console.log(err)
        }
    }
    deleteExercise = async (id) => {
        console.log(id);
        try{
            const deleteExercise = await fetch(`http://localhost:9000/api/v1/exercises/${id}`, {
            method:'DELETE',
            credentials: "include",
        });
        const parsedResponse = await deleteExercise.json();
        if(parsedResponse.status.code===200){
            this.setState({
                exercises: this.state.exercises.filter((exercise,i) =>exercise._id !==id)
            });
        }
    }catch(err){
        console.log(err)
        }
    }
    updateExercise = async (id, formData) => {
        const updatedExercise = await fetch(`http://localhost:9000/api/v1/exercises/${id}`, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await updatedExercise.json();
        this.setState({
            exercises: this.state.exercises.map((exercise)=>{
                if(id===exercise._id){
                    return parsedResponse.data
                }else{
                    return exercise
                }
            })
        })
        console.log(parsedResponse)
    }
    getExcercises= async () => {
        try{
            const exercises = await fetch('http://localhost:9000/api/v1/exercises', {
                credentials: "include",
            } );
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
                <Navigation/>
                <NewExercise createExercise={this.createExercise} />
                <h1>Welcome to the Gym!</h1>
                <h2>Check out some great exercise ideas here!</h2>
                <ExercisesList 
                exercises={this.state.exercises} 
                deleteExercise={this.deleteExercise}
                updateExercise={this.updateExercise}
                />
            </div>
            )
    }
}

export default ExercisesContainer;