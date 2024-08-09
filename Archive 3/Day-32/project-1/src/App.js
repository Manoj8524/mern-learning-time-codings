import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAdvice();
  }, []);

  async function fetchAdvice() {
    setLoading(true);
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip.advice);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="app">
      <Card advice={advice} fetchAdvice={fetchAdvice} loading={loading} />
    </div>
  );
};

export default App;
