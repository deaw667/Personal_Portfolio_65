// HeaderComp.jsx
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

/* =================================================================*/
/*import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "./HeaderComp.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export default function HeaderComp() {

    return(
        <div className="Header-1">
        <h1> <img src={reactLogo}/> Game Development & FrontEnd</h1>
            <div className="page-select">
                <Navbar/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}*/

/* =================================================================*/

/*
            <button type="button" onClick={()=>console.log("hellobro")}>Main</button>
            <button type="button">Other Game Development</button>
            <button type="button">About me</button>*/
