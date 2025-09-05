import React, { useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { transinorm } from "./Animations";

const HomePage = () => {
  const [password, Setpassword] = useState("");
  const navigate = useNavigate();

  const submitpassword = (e) => {
    e.preventDefault();

    if (password === "1234") {
      console.log("what the hell bro");
      navigate("/page1");
    } else {
      console.log("mother fucker");
    }
  };

  return (
    <motion.div {...transinorm} className="font-sans flex h-[100vh] m-0 justify-center items-center">
      <form onSubmit={submitpassword}>
        <h1>Enter Password</h1>
        <input
          type="text"
          value={password}
          onChange={(e) => Setpassword(e.target.value)}
          placeholder="type password..."
          className="bg-transparent text-white text-1xl w-[200px]"
        ></input>
        <button type="submit">Enter</button>
      </form>
    </motion.div>
  );
};

export default HomePage;
