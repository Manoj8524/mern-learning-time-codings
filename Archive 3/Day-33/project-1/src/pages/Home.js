import React from "react";
import { useDispatch } from "react-redux";
import { addFeed } from "../slices/feed";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    let feed = {
      name: "Jackson",
      page: 1,
      age: 25,
    };

    dispatch(addFeed(feed));
  };

  return (
    <div>
      <h1>Home</h1>
      <Link to="/feed">Feed</Link>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Home;
