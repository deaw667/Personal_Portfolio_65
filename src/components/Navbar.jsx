import { Link } from "react-router-dom";
import "../components/Navbar.css";
import { motion } from "framer-motion";
import { transinorm } from "./Animations";

export function Navbar() {
  return (
    <motion.div {...transinorm}>
      <Link to="/page1">
        <button>Home</button>
      </Link>
      <Link to="/page2">
        <button>Other Works</button>
      </Link>
      <Link to="/page3">
        <button>About me</button>
      </Link>
      <Link to="/">
        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
          }}
        >
          Log out
        </button>
      </Link>
    </motion.div>
  );
}
