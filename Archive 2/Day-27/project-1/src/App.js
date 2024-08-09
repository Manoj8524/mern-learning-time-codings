import React, { useState } from "react";

const App = () => {
  let name = "Jacob";
  let [varName, setVarName] = useState("Sam");

  // const changeText = () => {
  //   name = "Kevin";
  //   console.log("changed", name);
  // };

  // console.log("outside fn", name);
  const changeText = () => {
    // name = "Kevin";
    // console.log("changed", name);
    setVarName("Ben");
  };

  console.log("outside fn", varName);

  return (
    <div>
      <h1>{varName}</h1>
      <button onClick={changeText}>Change</button>
    </div>
  );
};

export default App;
