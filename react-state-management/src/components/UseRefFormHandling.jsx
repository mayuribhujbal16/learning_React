import React, { useRef, useState } from 'react'

const UseRefFormHandling = () => {

  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cityRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();

  const [errors, setErrors] = useState({});

  // Validation

  const validate = (data) => {

    let error = {};

    // Full Name

    if (!data.fullName.trim()) {

      error.fullName = "Full Name is Required";

    }

    // Email Regex

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email) {

      error.email = "Email is required";

    }

    else if (!emailRegex.test(data.email)) {

      error.email = "Invalid Email Format";

    }

    // Password Regex

    const passwordRegex = /^(?=.*\d).{6,}$/;

    if (!data.password) {

      error.password = "Password is required";

    }

    else if (!passwordRegex.test(data.password)) {

      error.password =
        "Invalid Pass format atleast 1 num nd 6 character required";

    }

    // City

    if (!data.city) {

      error.city = "Pls Select City";

    }

    // Gender

    if (!data.gender) {

      error.gender = "Pls Select Gender";

    }

    setErrors(error);

    return Object.keys(error).length === 0;

  };

  // Submit

  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = {

      fullName: fullNameRef.current.value,

      email: emailRef.current.value,

      password: passwordRef.current.value,

      city: cityRef.current.value,

      gender: maleRef.current.checked
        ? "Male"
        : femaleRef.current.checked
        ? "Female"
        : ""

    };

    if (validate(formData)) {

      console.log(formData);

      alert("Form Submitted Successfullyy");

    }

  };

  return (
    <div>

      <div className="container w-50 p-4 mt-4">

        <h2 className='text-center mb-3'>
          Uncontrolled Form Example - UseRef
        </h2>

        <form
          onSubmit={handleSubmit}
          className='border p-4 rounded shadow'
        >

          {/* Full Name */}

          <div className='m-2'>

            <label className='form-label'>
              Full Name
            </label>

            <input
              type='text'
              ref={fullNameRef}
              className={`form-control ${
                errors.fullName ? "is-invalid" : ""
              }`}
            />

            {errors.fullName && (

              <div className="invalid-feedback">
                {errors.fullName}
              </div>

            )}

          </div>

          {/* Email */}

          <div className='m-2'>

            <label className='form-label'>
              Email
            </label>

            <input
              type='email'
              ref={emailRef}
              className={`form-control ${
                errors.email ? "is-invalid" : ""
              }`}
            />

            {errors.email && (

              <div className="invalid-feedback">
                {errors.email}
              </div>

            )}

          </div>

          {/* Password */}

          <div className='m-2'>

            <label className='form-label'>
              Password
            </label>

            <input
              type='password'
              ref={passwordRef}
              className={`form-control ${
                errors.password ? "is-invalid" : ""
              }`}
            />

            {errors.password && (

              <div className="invalid-feedback">
                {errors.password}
              </div>

            )}

          </div>

          {/* City */}

          <div className='m-3'>

            <label className='form-label'>
              Select City
            </label>

            <select
              ref={cityRef}
              className={`form-select ${
                errors.city ? "is-invalid" : ""
              }`}
            >

              <option value="">choose city...</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Pune">Pune</option>
            </select>
            {errors.city && (
              <div className="invalid-feedback">
                {errors.city}
              </div>
            )}
          </div>
          <div className='mb-3'>

            <label className='form-label'>
              Gender
            </label>
            <br/>
            <input
              type="radio"
              name="gender"
              value="Male"
              ref={maleRef}
            />
            Male
            <br />
            <input
              type="radio"
              name="gender"
              value="Female"
              ref={femaleRef}
            />
            Female
            <br />
            {errors.gender && (

              <div className='text-danger'>
                {errors.gender}
              </div>
            )}

          </div>

          <button
            type='submit'
            className='btn btn-primary'
          >Submit
          </button>

        </form>

      </div>

    </div>
  )
}

export default UseRefFormHandling