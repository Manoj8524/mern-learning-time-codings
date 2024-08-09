import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import User from "../../components/User/User";

const Users = () => {
  const users = useSelector((state) => state.userInfo.users);

  console.log(users);

  return (
    <div className="users">
      <h1 className="users__title">Users</h1>
      <div className="users__container">
        {users.length === 0 ? (
          <div className="users__empty">
            <h1>No users found. Please add some.</h1>
            <h3>
              <Link to="/">Add Users</Link>
            </h3>
          </div>
        ) : (
          users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              jobRole={user.jobRole}
              age={user.age}
              contact={user.contact}
              email={user.email}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Users;
