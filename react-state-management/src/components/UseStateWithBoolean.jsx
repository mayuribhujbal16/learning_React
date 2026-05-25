import React, { useState } from 'react'

const UseStateWithBoolean = () => {
    const [show,setShow] = useState(true);

  return (
    <>
    <div>UseStateWithBoolean</div>
    <div className="container">
        <h2>Toggle Example</h2>
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Text</button>

        {show && <p>This is Visible </p>}
    </div>
    </>
  );
};

export default UseStateWithBoolean
