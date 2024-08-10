import React, { useEffect, useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const Submit = (e) => {
    e.preventDefault();
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
        <label htmlFor="">Age</label>
        <input
          type="number"
          min="0"
          max="100"
          placeholder="Enter your age"
          required
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default Form;
