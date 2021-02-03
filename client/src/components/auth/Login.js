import React from "react";
import "./style.css";
import Register from "./Register";

function Login() {
  return (
    <div id="facadeHero">
      <div className="container" id="loginCard">
        <h1>Frogtown Farm</h1>
        <p id="StPaul">St. Paul, Minnesota</p>
        <div className="row">
            <div className="col s8 offset-s2">
              <div className="input-field col s12">
                <input placeholder="Email" id="email" type="email" />
                <span className="red-text"></span>
              </div>
              <div className="input-field col s12">
                <input placeholder="Password" id="password" type="password" />
                <span className="red-text"></span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <a href="home">
                  <button
                    className="btn btn-success"
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      marginTop: "1rem",
                    }}
                  >
                    Login
                  </button>
                </a>
              </div>
            </div>
          <Register></Register>
        </div>
      </div>
    </div>
  );
}

export default Login;
