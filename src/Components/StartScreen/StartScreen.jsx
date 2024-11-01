import React from "react";
import "./StartScreen.css"


const StartScreen = ({dispatch,numOfQuestions}) => {


   return (

       <div className="start-container">
       <h1>Welcome to the quiz</h1>
       <h3>Test your React knowledge with {numOfQuestions} questions</h3>
       <button onClick={() => {

         dispatch({type : "start"})

       }}>Start</button>
       </div>

   )


}

export default StartScreen