import React from "react";
import "./NextButton.css"

const NextButton = ({dispatch,last,selectedOption}) => {

  if(selectedOption === null)
    return null


  return (

          
      <button className="next-btn"  onClick={() => {

          if(!last)
          dispatch({type : "nextQuestion"})
        else
        dispatch({type : "finish"})
 
      }}>{last?("Finish"):("Next")}</button>

  )



}

export default NextButton