import { useState } from 'react';

const UseStateHideShowPassWord = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div>UseState Hide-Show PassWord</div>

      <div className="container">

        <input
          type={showPassword ? "text" : "password"}
          className="form-control w-50"
          placeholder="Enter Password"/>
        <button
          className="btn btn-primary"
          onClick={() => setShowPassword(!showPassword)} >
          {showPassword ? "Hide Password" : "Show Password"}

        </button>

      </div>
      <hr/>
    </>
  );
};

export default UseStateHideShowPassWord;