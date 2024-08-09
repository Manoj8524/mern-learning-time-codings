import React from "react";
import { useParams } from "react-router-dom";

const Username = () => {
  const { name } = useParams();

  return <div>Username is {name}</div>;
};

export default Username;
