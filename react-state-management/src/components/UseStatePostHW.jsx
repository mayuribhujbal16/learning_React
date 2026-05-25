import React, { useState } from 'react'

const UseStatePostHW = ({ title,description, image }) => {

  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setCount(count + 1);
    setLike(true);
  };

  return (
    <>
    
      <div
  className="card p-3 bg-dark text-light"

  style={{
    boxShadow: "0px 0px 20px gray",
    borderRadius: "15px"
  }}
>

        <img
          src={image}
          alt="post"
          className="img-fluid mb-3"
          style={{
            height: "300px",
            objectFit: "cover",
            borderRadius:"10px"
          }}
          onClick={() => {
            setCount(count + 1);
            setLike(true);
          }}
          
        />

        <h5>{title}</h5>
        <p>{description}</p>

        <div className="d-flex justify-content-between align-items-ccenter mt-3">
            {/* <button className="btn btn-primary" onClick={handleLike}>
                Like
            </button> */}

            <h5 className="m-0">
                Likes : {count}
            </h5>
        <i
          className={`bi ${like ? "bi-heart-fill text-danger" : "bi-heart"} fs-2`}
          style={{ cursor: "pointer" }}
          onClick={handleLike}
          
        ></i>
         </div>

        {/* <h4 className="mt-3">
          Like : {count}
        </h4> */}

      </div>

    </>
  )
}

export default UseStatePostHW