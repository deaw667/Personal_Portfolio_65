import { Navbar } from "./Navbar";
import reactLogo from "../assets/react.svg";
import "./HeaderComp.css";
import { motion } from "framer-motion";
import { transinorm } from "./Animations";

export default function HeaderComp() {
  return (
      <motion.header {...transinorm} className="Header-1">
        <h1>
          <img src={reactLogo} alt="logo" /> Game Development & Front End
        </h1>
        <div className="page-select">
          <Navbar />
        </div>
      </motion.header>
  );
}