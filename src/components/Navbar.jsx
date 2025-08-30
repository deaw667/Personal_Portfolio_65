import { Link } from "react-router-dom";
import "../components/Navbar.css";

export function Navbar() {
  return (
    <>
      <Link to="/"><button>Home</button></Link>
      <Link to="/page2"><button>Other Game Development</button></Link>
      <Link to="/page3"><button>About me</button></Link>
    </>
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