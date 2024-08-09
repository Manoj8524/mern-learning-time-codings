import React, { useState } from "react";
import Table from "./Table/Table";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [contactNo, setContactNo] = useState("");

  const [users, setUsers] = useState([]);

  const addUser = (e) => {
    const userData = {
      name: name,
      email: email,
      age: age,
      contact: contactNo,
    };
    setUsers((currentData) => {
      return [...currentData, userData];
    });
  };

  return (
    <div className="app">
      <h1>User Form</h1>
      <div className="form">
        <label>Name</label>
        <br />
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          type="number"
          id="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <label>Contact No</label>
        <br />
        <input
          type="number"
          id="contact"
          onChange={(e) => setContactNo(e.target.value)}
        />
        <br />
        <button onClick={addUser}>Submit</button>
      </div>
      <Table users={users} />
    </div>
  );
};

export default App;
