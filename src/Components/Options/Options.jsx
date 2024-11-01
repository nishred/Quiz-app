import React from "react";
import "./Options.css"

import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

const Options = ({question,selectedOption,dispatch}) => {


   return (

     <div className="options-wrapper"> 
       {question.options.map((option,idx) => {
 

           let element;

           let optionClass;
         
           if(selectedOption!==null)
           {

               if(idx === question.correctOption)
               {
                   optionClass = "correct-option"
                   element = <FaRegCircleCheck color="wheat"/>
                 
               }
               else if(idx === selectedOption)
               {

                  optionClass = "wrong-option"
                  element = <RxCrossCircled color="wheat"/>
               }

           }  


          return (

             <button  key={option} className={`option-btn ${optionClass}`} onClick={() => {

                 dispatch({type : "selectOption",payload : idx})
                  
             }} disabled = {selectedOption!==null}>{element}{element && " "}{option}</button>
            
          )
        
       })}

     </div>  

   )

}

export default Options