import { useState } from "react";
import "./Login.css";

function Login() {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div>
      <form className="auth-form">
        <div className="form-header">
          <p className="form-title">{currentState}</p>
        </div>
        {currentState === "Login" ? null : (
          <input
            type="text"
            placeholder="Full Name"
            className="form-input"
            required
          />
        )}
        <input
          type="email"
          placeholder="Enter Email Address"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="form-input"
          required
        />
        <div className="form-footer">
          <p>Forget Password</p>
          {currentState === "Login" ? (
            <p
              className="toggle-auth-state"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create an account
            </p>
          ) : (
            <p
              className="toggle-auth-state"
              onClick={() => setCurrentState("Login")}
            >
              Login Here
            </p>
          )}
        </div>
        <button type="submit" className="form-button">
          {currentState}
        </button>
      </form>
    </div>
  );
}

export default Login;
