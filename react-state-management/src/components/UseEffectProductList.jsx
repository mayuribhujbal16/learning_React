import React, { useEffect, useState } from 'react'

const UseEffectProductList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.products.slice(0,16));
      });

  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2  className="text-center fw-bold mb-5"
          style={{
            fontSize: "40px"
          }}>Product Collection</h2>

        <div className="row g-4">

          {users.map((user) => (

            <div className="col-md-3" key={user.id}>

              <div
                className="card h-100 border-0"
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  transition: "0.3s",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                  background: "#fff"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0px 10px 25px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "0px 4px 15px rgba(0,0,0,0.1)";
                }}>
                <img
                  src={user.thumbnail}
                  alt="product"
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover"
                  }}
                />
                <div className="card-body">
                  <h5 className="fw-bold"
                    style={{ minHeight: "50px"
                    }}
                  >{user.title}</h5>
                  <p className="text-secondary mb-2">
                    {user.category}
                  </p>

                  <h4 className="fw-bold text-success">{user.price}</h4>

                  <button className="btn btn-dark w-100 mt-3">Buy Now</button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </>
  )
}

export default UseEffectProductList