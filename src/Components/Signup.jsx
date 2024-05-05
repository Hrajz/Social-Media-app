import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formdata, SetFormdata] = useState({
    firstName: "",
    lastName: "",
    userId: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3100/signup",
        formdata
      );
      console.log("aa gya",response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  console.log(formdata)
  
  return (
    <div>
      <form onSubmit={handleSubmit} id="form" style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex " }}>
          <input
            onChange={handleChange}
            className="input"
            style={{ margin: "10px 10px", width: "150px" }}
            type="text"
            name="firstName"
            required={true}
            placeholder="First name"
          />
          <input
            onChange={handleChange}
            className="input"
            style={{ margin: "10px 10px", width: "150px" }}
            type="text"
            name="lastName"
            required={true}
            placeholder="Last name"
          />
        </div>
        <div
          className="dob"
          style={{ fontSize: "12px", width: "90%", textAlign: "start" }}
        >
          Enter Date of Birth
        </div>
        <input
          onChange={handleChange}
          className="input"
          style={{ margin: "1px 0 10px 0" }}
          f
          type="date"
          name="dob"
          required={true}
        />
        <input
          onChange={handleChange}
          className="input"
          style={{ margin: "10px 0" }}
          type="text"
          name="userId"
          required={true}
          placeholder="Userid"
        />
        <input
          onChange={handleChange}
          className="input"
          style={{ margin: "10px 0" }}
          type="email"
          name="email"
          required={true}
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          className="input"
          style={{ margin: "10px 0" }}
          type="Password"
          name="password"
          required={true}
          placeholder="Create new password"
        />
        <input
          onChange={handleChange}
          className="input"
          style={{ margin: "10px 0" }}
          type="Password"
          name="confirmPassword"
          required={true}
          placeholder="Confirm password"
        />
        <button onClick={handleSubmit} type="submit" id="create-account">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
