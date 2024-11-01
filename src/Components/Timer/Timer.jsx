import React, { useEffect } from "react";


const Timer = ({time,dispatch}) => {


   let minutes = `${(time.minutes<10?("0"):(""))}${time.minutes}`

   let seconds = `${(time.seconds)<10?("0"):("")}${time.seconds}`


   useEffect(() => {


    const id = window.setInterval(() => {

   
      dispatch({type : "updateTime"})

    },1000)


    return () => {

        window.clearInterval(id)

    }


   },[dispatch])


   return (

     <span>
      {minutes}:{seconds}   
     </span>     
  
   )


}

export default Timer