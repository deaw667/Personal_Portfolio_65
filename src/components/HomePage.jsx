import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { transinorm } from "./Animations";

const HomePage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [correct, setCorrect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setCorrect(true);
      navigate("/page1"); // auto-redirect
    }
  }, []);


  const getTimeandGreet = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour <= 12) return "Welcome Good Morning Sir!!!";
    if (hour >= 12 && hour <= 18) return "Welcome Good Afternoon Sir!!!";
    return "Welcome Good Evening Sir!!!";
  };

  const submitpassword = (e) => {
    e.preventDefault();

    if (password === "1234") {
      setCorrect(true);
      localStorage.setItem("isLoggedIn", "true");
      setTimeout(() => navigate("/page1"), 1000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <motion.div
      {...transinorm}
      className="font-sans flex h-[100vh] m-0 justify-center items-center"
    >
      <form
        onSubmit={submitpassword}
        className="flex flex-col gap-3 items-center"
      >
        <h1>Enter Password</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password is 1234..."
          className="bg-transparent text-white border border-white rounded p-2 w-[200px]"
        />

        {!correct && (
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Enter
          </button>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-500 text-sm"
          >
            Wrong password!
          </motion.p>
        )}

        {correct && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-green-500 text-sm"
          >
            {getTimeandGreet()}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default HomePage;
