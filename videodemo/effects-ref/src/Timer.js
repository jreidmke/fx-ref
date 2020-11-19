import React, { useState, useEffect } from "react";// use effect is imported in

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => { //interval set
      setSeconds(seconds => seconds + 1)//increases seconds state
    }, 1000) //every one second

    /*without using useEffect() hook, the setInterval func will reset
    every re-render (every time seconds state is set). this will cause
    a huge mess! useEffect() allows this to persist across re-renderings*/

    return () => {
      console.log("CLEANUP FUNCTION!!")
      console.log(intervalId)
      clearInterval(intervalId)
    }
  }, []) /** <--ignore the above comment. you need this empty array
              this prevents the useEffect from reseting and will force it
              to persist across re-renderings.*/


  return <h1>{seconds}</h1>
}

export default Timer;