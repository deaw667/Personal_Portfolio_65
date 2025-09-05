import { Link } from "react-router-dom";
import "../components/Navbar.css";
import { motion } from "framer-motion";
import { transinorm } from "./Animations";

export function Navbar() {
  return (
    <motion.div {...transinorm}>
      <Link to="/page1"><button>Home</button></Link>
      <Link to="/page2"><button>Other Game Development</button></Link>
      <Link to="/page3"><button>About me</button></Link>
      <Link to="/"><button>Log out</button></Link>
    </motion.div>
  );
}


/*import { Link } from "react-router-dom"
import "../components/Navbar.css"
export function Navbar() {
    return(
        <>
            <Link to="/">
            <button type="button">Home</button>
            </Link>

            <Link to="/page2">
            <button type="button">Other Game Development</button>
            </Link>

            <Link to="/page3">
            <button type="button">About me</button>
            </Link>
        </>
    )
}*/