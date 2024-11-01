/* eslint-disable no-case-declarations */
import React, { useMemo } from "react";
import Header from "./Components/Header/Header";
import { useReducer } from "react";
import { useEffect } from "react";
import Loader from "./Components/Loader/Loader";
import Main from "./Components/Main/Main";
import Error from "./Components/Error/Error";

import Question from "./Components/Question/Question";

import StartScreen from "./Components/StartScreen/StartScreen";

import NextButton from "./Components/NextButton/NextButton";
import Score from "./Components/Score/Score";
import FinishScreen from "./Components/FinishScreen/FinishScreen";

import Footer from "./Components/Footer/Footer";

import Timer from "./Components/Timer/Timer";

const initialState = {

 questions : [],

 // "loading" "ready" "active" "finished" "error"
 status : "loading",
 
 currentQuestion : 0,
 selectedOption : null,
 points : 0,
 highScore : 0,
 time : {minutes:10,seconds : 0}

}


function reducer(state,action)
{

  switch(action.type)
  {

     case "dataReceived" :  
     return {...state,questions : action.payload,status : "ready"}

     case "dataFailed":
      return {...state,status : "error"}

     case "start":
      return {...state,status : "active"}

    case "selectOption":

    // eslint-disable-next-line no-unused-vars
    let points = (action.payload === state.questions[state.currentQuestion].correctOption ? (state.questions[state.currentQuestion].points):(0))

    return {...state,selectedOption : action.payload,points : state.points + points}


    case "nextQuestion" :


            return {...state,currentQuestion : state.currentQuestion + 1,selectedOption : null}

  
     case "finish" :

        return {...state,status : "finished",highScore : Math.max(state.highScore,state.points)}


    case "restart":

    return {...state,currentQuestion : 0,selectedOption : null,points : 0,status : "active"}


    case "updateTime" :

    let minutes = state.time.minutes
    let seconds = state.time.seconds

    seconds--

    if(seconds < 0)
    {
      
       seconds = 59


       minutes--
       
    }

    if(minutes === 0 && seconds === 0)
      return {...state,status : "finished"}
    return {...state,time : {minutes,seconds}}  


     default : 
     throw new Error("Invalid action")

  }

}

const App = () => {


   const [{questions,status,currentQuestion,selectedOption,points,highScore,time},dispatch] = useReducer(reducer,initialState)

   useEffect(() => {


     async function fetchQuestions()
     {
 
         try{
         const response = await fetch("http://localhost:8010/questions")

         const json = await response.json()

         dispatch({type : "dataReceived",payload : json})
         }
         catch(err)
         {
             dispatch({type : "dataFailed"})

         }

     }

      fetchQuestions()

   },[])


   const totalPoints = useMemo(() => {

  
      return questions.reduce((acc,ele) => {

       return acc + ele.points

      },0)

   },[questions])

   
   return (

      <>
     <Header />

     <Main>
     
      {status === "loading" && <Loader />}
      {status === "error" && <Error />} 
      {status === "ready" && <StartScreen dispatch = {dispatch} numOfQuestions={questions.length} />}

      {status === "active" &&
        (<>
         <Score questions={questions} currentQuestion={currentQuestion} points={points} totalPoints={totalPoints} /> 
        <Question question = {questions[currentQuestion]} selectedOption = {selectedOption} dispatch = {dispatch}/>
        <Footer>

        <Timer time = {time} dispatch = {dispatch} />
        <NextButton dispatch = {dispatch} last = {currentQuestion === questions.length-1} selectedOption={selectedOption} /> 
        </Footer>

        </>)
      
      }

      {status === "finished" && <FinishScreen points = {points} totalPoints = {totalPoints} highScore={highScore} dispatch = {dispatch} />}



     </Main>


      </>

   )


}

export default App