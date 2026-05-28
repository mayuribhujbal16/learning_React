import React, { useEffect, useState } from 'react'

const UseEffectCurrentTime = () => {

  const [time, setTime] = useState("");

  useEffect(() => {

    const interval = setInterval(() => {

      const currentTime = new Date().toLocaleTimeString();

      setTime(currentTime);

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
    
      <div className="container text-center mt-5">

        <div
          className="card p-5 mx-auto"

          style={{
            width: "400px",
            borderRadius: "20px",
            boxShadow: "0px 0px 20px gray"
          }}
        >

          <h1 className="mb-4">
             Clock
          </h1>

          <h2>
            {time}
          </h2>

        </div>

      </div>

    </>
  )
}

export default UseEffectCurrentTime