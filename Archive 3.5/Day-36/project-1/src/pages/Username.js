import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import User from "../components/User/User";

const Username = () => {
  const { email } = useParams();
  const users = useSelector((state) => state.userInfo.users);

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (email) {
      const user = users.find((item) => item.email === email);
      if (user) {
        setUserInfo(user);
      }
    }
  }, [email, users]);

  if (!email || !userInfo) {
    return <></>;
  }

  return (
    <div>
      <User
        key={userInfo.id}
        id={userInfo.id}
        name={userInfo.name}
        jobRole={userInfo.jobRole}
        age={userInfo.age}
        contact={userInfo.contact}
        email={userInfo.email}
      />
    </div>
  );
};

export default Username;
