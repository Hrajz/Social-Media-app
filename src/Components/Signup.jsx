import React from 'react'

const Signup = () => {
  return (
    <div>
      <form id="form" style={{marginBottom:'40px'}}>
        <div style={{ display: "flex " }}>
          <input
            className="input"
            style={{ margin: "10px 10px", width: "150px" }}
            type="text"
            name="FirstName"
            required="true"
            placeholder="First name"
          />
          <input
            className="input"
            style={{ margin: "10px 10px", width: "150px" }}
            type="text"
            name="LastName"
            required="true"
            placeholder="Last name"
          />
        </div>
        <div className="dob" style={{fontSize:'12px',width:'90%', textAlign:'start'}}>Enter Date of Birth</div>
        <input
          className="input"
          style={{ margin: "1px 0 10px 0" }}
          f
          type="date"
          name="dob"
          required="true"
        />
        <input
          className="input"
          style={{ margin: "10px 0" }}
          type="text"
          name="UserId"
          required="true"
          placeholder="Userid"
        />
        <input
          className="input"
          style={{ margin: "10px 0" }}
          type="email"
          name="email"
          required="true"
          placeholder="Email"
        />
        <input
          className="input"
          style={{ margin: "10px 0" }}
          type="Password"
          name="password"
          required="true"
          placeholder="Create new password"
        />
        <input
          className="input"
          style={{ margin: "10px 0" }}
          type="Password"
          name="password"
          required="true"
          placeholder="Confirm password"
        />
        <button id="create-account">Sign up</button>
      </form>
    </div>
  );
}

export default Signup
