import React from "react";
import "./FinishScreen.css"


const FinishScreen = ({points,totalPoints,highScore,dispatch}) => {



   return (

      <>
      <h1 className="score-wrapper">You scored {points}/{totalPoints} points ({Math.round((points/totalPoints)*100)}%)</h1>

      <h2>Highscore : {highScore}</h2>

      <button className="restart-btn" onClick={() => {

            dispatch({type : "restart"})

      }}>Restart</button>
      
      </>

   )



}

export default FinishScreen