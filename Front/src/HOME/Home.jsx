import React, {Component} from 'react';
import Navigation from '../Components/Navigation'
import {Route} from 'react-router-dom'
import UserProfile from '../Components/UserProfile'
import Contact from '../Components/Contact'
import NewExercise from '../ExercisesContainer/NewExercise'
import ExerciseContainer from '../ExercisesContainer/ExercisesContainer'
import ExerciseList from '../ExercisesContainer/ExercisesList'
class Home extends Component {
    render(){
        return(
            <div>
                <Navigation/>
                <h1> Welcome to WerqOut</h1>
                <ExerciseContainer/>
                <main>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/profile" component={UserProfile}/>
                    <Route exact path="/new-exercise" component={NewExercise}/>
                    <Route exact path="/gym" component={ExerciseContainer}/>
                </main>
            </div>
        )
    }
}

export default Home;