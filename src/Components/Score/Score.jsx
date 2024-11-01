import React from "react";

import { useMemo } from "react";

import "./Score.css"


const Score = ({questions,currentQuestion,points,totalPoints}) => {

 
  

    return (

       
       <div>
       
       <input className="range-input" type="range" min={1} max={questions.length} value={currentQuestion + 1}/>

       <div className="question-points-wrapper"> 
       
       <span>Question : {currentQuestion + 1}/{questions.length}</span>

       <span>Points: {points}/{totalPoints}</span>

       </div>
       
       </div>     


    )


}

export default Score