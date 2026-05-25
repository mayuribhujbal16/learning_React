import { useState } from 'react';

const UseStateWithProps = ({ name, price }) => {
  const [qty, setQty] = useState(0);
  const increment = () => {
    setQty(qty + 1);
  };
  const decrement = () => {
    if(qty > 0){
      setQty(qty - 1);
    }
  };
  
  return (
    <>
      <div
  className="card p-3 bg-dark text-light"

  style={{
    boxShadow: "0px 0px 20px gray",
    borderRadius: "15px",
    width: "18rem"
  }}
>
        <h3>{name}</h3>
        <p>Price : {price}</p>
        <div className="d-flex gap-3 align-items-center">
          <button
            className="btn btn-danger"
            onClick={decrement}>-</button>

          <span>{qty}</span>

          <button
            className="btn btn-success"
            onClick={increment}>+</button>
        </div>
        
      </div>
    </>
  );
};

export default UseStateWithProps;