import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Username from "./pages/Username";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { setUsers } from "./slices/userSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let users = localStorage.getItem("userData");

    dispatch(setUsers(users ? JSON.parse(users) : []));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:email" element={<Username />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
