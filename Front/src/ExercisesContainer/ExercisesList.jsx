import React from 'react';
import UpdateExercise from './EditExerciseModal'

function ExercisesList(props) {
                
    const exercises = props.exercises.map(function(exercises){
        return(
            <div key={exercises._id}> 
                <h3>{exercises.name}</h3>
                <p>submitted by: {exercises.user.username} </p>
                <p>Equipment: {exercises.equipment}</p>
                <p>Directions: {exercises.directions}</p>
                <button onClick={()=>{
          props.deleteExercise(exercises._id)
          }}>Delete</button>
          <UpdateExercise 
          updateExercise={props.updateExercise}
          exercises= {exercises}    
          id={exercises._id}/>
            </div>
        )
    })
    return(
        <div>
            {exercises}
        </div>
    )
}

export default ExercisesList;