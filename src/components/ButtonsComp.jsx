import "../components/ButtonsComp.css";
import { memo } from "react";
import React from 'react'


export function Button01({ buttonname , linkurl}) {
  return (
    <>
     <a href={linkurl} target="_blank" rel="noopener noreferrer">
      <button>{buttonname} →</button>
      </a>
    </>
  );
}

export function Button02({ buttonname, linkurl }) {
  return (
    <>
    <a href={linkurl} target="_blank" rel="noopener noreferrer">
      <button>{buttonname} →</button>
      </a>
    </>
  );
}

export function Videoplayer({ videosrc }) {
  return (
    <div className="vid-comp">
      <video src={videosrc} autoPlay loop muted preload="auto"></video>
    </div>
  );
}

export function Youtubevideoplayer({ vidurl }) {
  return (
    <div className="yt-vidplayer">
      <iframe
        src={vidurl}
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export const Imgresponsive = memo(function Imgresponsive({ title, imgsrc = [] }) {
  return (
    <div className="img-res">
      {imgsrc.map((img, i) => (
        <img key={i} src={img} alt={`${title}-${i}`} loading="lazy" />
      ))}
    </div>
  );
});


// export function Imgresponsive({ title, imgsrc = [] }) {
//   return (
//     <div className="img-res">
//       {imgsrc.map((img, i) => (
//         <img key={i} src={img} alt={`${title}-${i}`} />
//       ))}
//     </div>
//   );
// }
