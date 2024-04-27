import React from 'react'

const Login = () => {
  return (
    <div>
      <form id="form">
        <input
          className="input"
          style={{ margin: "10px 0" }}
          type="text"
          name="userId"
          required="true"
          placeholder="Email address or userId"
        />
        <input
          className="input"
          style={{ margin: "10px 0" }}
          type="password"
          name="password"
          required="true"
          placeholder="Password"
        />
        <button id="log-in">Log in</button>
        <div id="forget-password">Forgetten Password ?</div>
        <button id="create-account">Create New Account</button>
      </form>
    </div>
  );
}

export default Login
