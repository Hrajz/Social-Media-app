import React from "react";
import Login from "./Login";
import Signup from "./Signup";

const LandingPage = () => {

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
      {/* <Login /> */}
      <Signup />
    </div>
  );
};

export default LandingPage;
