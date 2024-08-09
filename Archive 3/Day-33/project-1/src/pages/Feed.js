import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Feed = () => {
  const feed = useSelector((state) => state.feedInfo.feed);
  console.log(feed);
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Feed</h1>
    </div>
  );
};

export default Feed;
