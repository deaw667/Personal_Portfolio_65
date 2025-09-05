import "./Template.css";
import { Button01, Button02 } from "../components/ButtonsComp";
import { motion } from "framer-motion";
import { elementanim } from "./Animations";

export default function EnemySection({
  title,
  text,
  images = [],
  imageslower = [],
  reverse,
  video,
  linkurl,
  isgit,
}) {
  return (
    <motion.div {...elementanim} className="whole-enemy">
      <div className={`enemy-section ${reverse ? "reverse" : ""}`}>
        <motion.div {...elementanim} className="enemy-text">
          <h2>{title}</h2>
          <p>{text}</p>
          {isgit && <Button01 buttonname="Source Code" linkurl={linkurl}/>}
        </motion.div>

        <motion.div {...elementanim} className="enemy-image">
          <div className="video-container">
            {/* <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
            ></video> */}
            <iframe
              src={video}
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
            {/* <iframe
              src="https://www.youtube.com/embed/RM3OO0FFhlo"
              title="Enemy"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe> */}
          </div>
          {images.map((img, i) => (
            <img key={i} src={img} alt={`${title}-${i}`} />
          ))}
        </motion.div>
      </div>

      <motion.div {...elementanim} className="lower-enemy-image">
        {imageslower.map((img, i) => (
          <img key={i} src={img} alt={`${title}-${i}`} />
        ))}
      </motion.div>
    </motion.div>
  );
}