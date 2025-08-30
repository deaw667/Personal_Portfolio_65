// EnemySection.jsx
import "./Template.css";
import { Button_01, Button_02 } from "../components/ButtonsComp";
import Typewriter from "./Typewriter"; // import it

export default function EnemySection({
  title,
  text,
  images = [],
  imageslower = [],
  reverse,
  video,
  linkurl,
}) {
  return (
    <div className="whole-enemy">
      <div className={`enemy-section ${reverse ? "reverse" : ""}`}>
        <div className="enemy-text">
          <h2>{title}</h2>
          {Array.isArray(text) ? (
            text.map((t, i) => <Typewriter key={i} text={t} speed={1} />)
          ) : (
            <Typewriter text={text} speed={1} />
          )}
          <Button_01 buttonname="Source Code" linkurl={linkurl}/>
        </div>

        <div className="enemy-image">
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
        </div>
      </div>

      <div className="lower-enemy-image">
        {imageslower.map((img, i) => (
          <img key={i} src={img} alt={`${title}-${i}`} />
        ))}
      </div>
    </div>
  );
}

/*export default function EnemySection({ title, text, images = [], imageslower = [], reverse ,video}) {
  return (
    <div className="whole-enemy">
      <div className={`enemy-section ${reverse ? "reverse" : ""}`}>
        <div className="enemy-text">
          <h2>{title}</h2>
          {}
          {Array.isArray(text) ? (
            text.map((t, i) => <p key={i}>{t}</p>)
          ) : (
            <p>{text}</p>
          )}
          <Button_01 buttonname="Source Code"/>
        </div>

        <div className="enemy-image">
          <div className="video-container">
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
              ></video>
          </div>
          {images.map((img, i) => (
            <img key={i} src={img} alt={`${title}-${i}`} />
          ))}
        </div>
      </div>
    
      <div className="lower-enemy-image">
        {imageslower.map((img, i) => (
          <img key={i} src={img} alt={`${title}-${i}`} />
        ))}
      </div>
    </div>
  );
}
*/
