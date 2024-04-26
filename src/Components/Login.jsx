import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="loginText">
        <div className="brandName" style={{ width: "50%%" }}>
          <img
            src="images/logo.webp"
            alt=""
            style={{ width: "69px", aspectRatio: "1", borderRadius: "50%" }}
          />
          <h2 style={{ fontSize: "60px", display: "inline" }}>OO𝐍ΣC𝐓</h2>
        </div>
        <p style={{ width: "80%", margin: "0", fontSize: "24px" }}>
          Koonect helps you connect and share with the people in your life.
        </p>
      </div>
      <form id="form">
        <input className="input" id="input1" style={{margin:'10px 0'}}
          type="text"
          name="name"
          placeholder="Email address or Phone no"
        />
        <input className="input" style={{margin:'10px 0'}} type="password" name="password" placeholder="Password" />
        <button id="log-in">Log in</button>
        <div id="forget-password">Forgetten Password ?</div>

        <button id="create-account">Create New Account</button>
      </form>
    </div>
  );
};

export default Login;
