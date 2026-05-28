import React, { useEffect, useState,  } from 'react'
import UseEffectStopwatch from './UseEffectStopwatch';

const UseEffectCounter = () => {

const[count,setCount] =useState(0);

  useEffect(() => {
    console.log("Runs on every Render");
  }); // Every Render

  useEffect(() => {
    console.log("Runs only once");
  }, []); // Runs only once

  useEffect(() => {
    console.log("Count Updated :", count);
  }, [count]); // Runs when count updates

  return (
    <>
    
      <div className="container">

        <h2>UseEffectCounter</h2>

        <h1>{count}</h1>

        <button
          className="btn btn-primary"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>

      </div>

      <hr />

      <UseEffectStopwatch />

    </>
  )
}

export default UseEffectCounter