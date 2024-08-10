import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/users", { name, email, password })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className="createUser" onSubmit={Submit}>
      <h1>Add New User</h1>
      <div className="user-info">
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="user-info">
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="user-info">
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default Form;
