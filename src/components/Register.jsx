import React, { useState } from "react";
import Navbar from "./Navbar";
import "./styles/Register.css";

// Registration page to create an account.
export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <Navbar/>
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" placeholder="Full Name" />
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="enter your password"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
