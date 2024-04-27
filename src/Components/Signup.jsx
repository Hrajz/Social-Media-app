import React from 'react'

const Signup = () => {
  return (
    <div>
      <form id="form">
        <input
          type="text"
          name="FirstName"
          required="true"
          placeholder="first name"
        />
        <input
          type="text"
          name="LastName"
          required="true"
          placeholder="last name"
        />
        <div className="dob">Enter Date of Birth</div>
        <input type="date" name="dob" required="true" />
        <input type="text" name="UserId" required="true" placeholder="userid" />
        <input type="email" name="email" required="true" placeholder="Email" />
        <input
          type="Password"
          name="password"
          required="true"
          placeholder="create new password"
        />
        <input
          type="Password"
          name="password"
          required="true"
          placeholder="confirm password"
        />
        <button id="create-account">Sign up</button>
      </form>
    </div>
  );
}

export default Signup
