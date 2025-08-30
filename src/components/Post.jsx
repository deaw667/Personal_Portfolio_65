import gameplay from "../assets/gameplay.jpg";
import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ item }) {
  console.log({ item });

  return (
    <div className="seperated-section">
      <div className="left-section">
        <img src={item.name} />
      </div>
      <div className="right-section">
        <Link to={item.page} state={{ item }}>
          <h1>{item.title} →</h1>
        </Link>
        <p>{item.text}</p>
      </div>
    </div>
  );
}
