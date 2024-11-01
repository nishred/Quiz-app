import React from "react";
import "./Question.css"
import Options from "../Options/Options";

// "question": "How does data flow naturally in React apps?",
//       "options": [
//         "From parents to children",
//         "From children to parents",
//         "Both ways",
//         "The developers decides"
//       ],
//       "correctOption": 0,
//       "points": 10


const Question = ({question,selectedOption,dispatch}) => {

   return (

       <>
        <h1>{question.question}</h1>
        <Options question={question} selectedOption={selectedOption} dispatch={dispatch}/>
       </>    

   )


}

export default Question