import React, { useState } from 'react'

const UseStateInputEx = () => {
    const [name,setName] = useState("");5

  return (
    <div className="containre mt-5">
        <hr></hr>
        <label className='form-label'>Enter Name</label>
        <input
        className='form-control'
        type="text"
        placeholder="Enter NAme"
        onChange={(e) => setName(e.target.value)}
        />
        <h2 className='text-success'>Your Entered Name: {name}</h2>
    </div>
  )
}

export default UseStateInputEx
