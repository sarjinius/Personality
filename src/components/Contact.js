import React from "react";
import "./styles/Contact.css";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-form">
        <h2>Contact</h2>
        <div className="contract-container">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="youremail@gmail.com" />
          <label htmlFor="description">Description</label>
          <input type="text" placeholder="Description" />
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
