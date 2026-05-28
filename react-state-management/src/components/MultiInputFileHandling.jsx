import React, { useState } from 'react'

const MultiInputFileHandling = () => {

  const [form, setForm] = useState({
    fullName:"",
    email:"",
    password:"",
    city:"",
    gender:""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {

    let error = {};

    if (!form.fullName.trim()) {
      error.fullName = "Full Name is Required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email) {
      error.email = "Email is required";
    }

    else if (!emailRegex.test(form.email)) {
      error.email = "Invalid Email Format";
    }

    const passwordRegex = /^(?=.*\d).{6,}$/;

    if (!form.password) {
      error.password = "Password is required";
    }

    else if (!passwordRegex.test(form.password)) {
      error.password =
        "Invalid Pass format at least 1 num nd 6 character required";
    }

    if (!form.city) {
      error.city = "Pls Select City";
    }

    if (!form.gender) {
      error.gender = "Pls Select Gender";
    }

    setErrors(error);

    return Object.keys(error).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {

      alert("Form submitted Successfullyyyyyy!!!");

      console.log(form);

    }
  };

  return (
    <div>

      <div className="container">

        <h3>
          Control Form With Validation- UseState Obj
        </h3>

        <form
          onSubmit={handleSubmit}
          className='border rounded shadow p-4'
        >

          <label>Full Name</label>

          <input
            type='text'
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />

          {errors.fullName && (
            <div className="invalid-feedback">
              {errors.fullName}
            </div>
          )}

          {/* For Emails */}

          <label>Email</label>

          <input
            type='text'
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && (
            <div className="invalid-feedback">
              {errors.email}
            </div>
          )}

          {/* for Passwords */}

          <label>Password</label>

          <input
            type='text'
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          {errors.password && (
            <div className="invalid-feedback">
              {errors.password}
            </div>
          )}

          {/* for city */}

          <label>Select City</label>

          <select
            className={`form-control ${errors.city ? "is-invalid" : ""}`}
            name="city"
            value={form.city}
            onChange={handleChange}
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

          {/* for gender */}

          <label>Select Gender</label>

          <br />

          <input
            type='radio'
            name="gender"
            value="Male"
            checked={form.gender === "Male"}
            onChange={handleChange}
          />
          Male

          <input
            type='radio'
            name="gender"
            value="Female"
            checked={form.gender === "Female"}
            onChange={handleChange}
            className='ms-3'
          />
          Female

          {errors.gender && (
            <div className="text-danger">
              {errors.gender}
            </div>
          )}

          <button
            type='submit'
            className='btn btn-primary mt-4'
          >
            Submit
          </button>

        </form>

      </div>

    </div>
  )
}

export default MultiInputFileHandling