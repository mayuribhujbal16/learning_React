import React, { useEffect, useState } from 'react'

const UseEffectStopwatch = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [activeBtn, setActiveBtn] = useState("");

  useEffect(() => {

    let interval;

    if (start) {

      interval = setInterval(() => {

        setTime((prevTime) => prevTime + 1);

      }, 1000);

    }

    return () => clearInterval(interval);

  }, [start]);

  return (
    <>
    
      <div className="container mt-5">

        <div
          className="card p-5 mx-auto text-center"

          style={{
            width: "400px",
            borderRadius: "20px",
            boxShadow: "0px 0px 20px gray"
          }}
        >

          <h1 className="mb-4">
            Stopwatch
          </h1>

          <h2 className="mb-4">
            {time} sec
          </h2>

          <div className="d-flex justify-content-between">

            {/* Start Button */}

            <button
              className={`btn ${
                activeBtn === "start"
                  ? "btn-success shadow-lg"
                  : "btn-outline-success"
              }`}

              onClick={() => {
                setStart(true);
                setActiveBtn("start");
              }}
            >
              Start
            </button>

            {/* Stop Button */}

            <button
              className={`btn ${
                activeBtn === "stop"
                  ? "btn-danger shadow-lg"
                  : "btn-outline-danger"
              }`}

              onClick={() => {
                setStart(false);
                setActiveBtn("stop");
              }}
            >
              Stop
            </button>

            {/* Reset Button */}

            <button
              className={`btn ${
                activeBtn === "reset"
                  ? "btn-dark shadow-lg"
                  : "btn-outline-dark"
              }`}

              onClick={() => {
                setTime(0);
                setStart(false);
                setActiveBtn("reset");
              }}
            >
              Reset
            </button>

          </div>

        </div>

      </div>

    </>
  )
}

export default UseEffectStopwatch