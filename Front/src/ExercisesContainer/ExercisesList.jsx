import React from 'react';

function ExercisesList(props) {
                
    const exercises = props.exercises.map(function(exercises){
        return(
            <div key={exercises._id}> 
                <h3>{exercises.name}</h3>
                <p>submitted by: {exercises.user} </p>
                <p>Equipment: {exercises.equipment}</p>
                <p>Directions: {exercises.directions}</p>
            </div>
        )
    })
    return(
        <div>
            {exercises}
        </div>
    )
}
// render() { 
//     return(
//         <div>
//             <h1>Welcome to the Gym.</h1>
//             <h3>Get swoll.</h3>
//         </div>
//     )
//}




export default ExercisesList;