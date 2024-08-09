import React from "react";
import "./User.css";
import { Link } from "react-router-dom";

const User = ({ id, name, age, email, contact, jobRole, deleteUser }) => {
  return (
    <div className="user">
      <h2>
        Id: <span>{id}</span>
      </h2>
      {deleteUser ? (
        <Link to={`/users/${id}`}>
          <h3>
            Name: <span>{name}</span>
          </h3>
        </Link>
      ) : (
        <h3>
          Name: <span>{name}</span>
        </h3>
      )}
      <h3>
        Age: <span>{age}</span>
      </h3>
      <h3>
        Email: <span>{email}</span>
      </h3>
      <h3>
        Contact: <span>{contact}</span>
      </h3>
      <h3>
        Role: <span>{jobRole}</span>
      </h3>
      {deleteUser && (
        <div className="user__bottom">
          <button className="user__delete" onClick={deleteUser}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
