import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./Home.css";

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    age: "",
    jobRole: "",
  });

  useEffect(() => {
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        id: uuid(),
      };
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const handleAdd = () => {
    console.log("userInfo", userInfo);

    setUserInfo({
      id: uuid(),
      name: "",
      email: "",
      contact: "",
      age: "",
      jobRole: "",
    });
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__formContainer">
          <h1 className="home__title">Add User Information</h1>
          <input type="text" value={userInfo.id} disabled />
          <br />
          <input
            name="name"
            placeholder="Enter user's name"
            value={userInfo.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter user's email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="contact"
            placeholder="Enter user's contact no"
            value={userInfo.contact}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="age"
            placeholder="Enter user's age"
            value={userInfo.age}
            onChange={handleChange}
          />
          <br />
          <input
            name="jobRole"
            placeholder="Enter user's role"
            value={userInfo.jobRole}
            onChange={handleChange}
          />
          <br />
          <button onClick={handleAdd}>Add User</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
