import HeaderComp from "./HeaderComp";
import Bottom from "./Bottom";

import ytran from "../assets/1ytran.jpg";
import "./Aboutme.css";
import unity from "../assets/icons/unityengine.png";
import lua from "../assets/icons/LUA.png";
import ps from "../assets/icons/PS.png";
import pr from "../assets/icons/PR.png";
import vsc from "../assets/icons/VSC.png";
import ae from "../assets/icons/AE.png";
import csharp from "../assets/icons/CSharp.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import reactLogo from "../assets/react.svg";

import { FaUnity } from "react-icons/fa6";
import { SiRobloxstudio } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";

import { transinorm } from "./Animations";

export default function Aboutme() {
  const identext =
    "I am graduated from Walailak University, majoring in Multimedia Animation and Games. My favorite hobby is Creating a game in different platform like unity, roblox, unreal, Or even modding the random game. I'm ready to keep improving my skills.You can contact me by the You can contact us via the channels below here.";

  return (
    <motion.div {...transinorm}>
      {/* bodycomp */}
      <div className="flex flex-col flex-wrap items-center justify-center gap-[50px] border-t border-white pt-[50px] pr-[20px] pb-[30px] text-center md:flex-row md:gap-[50px] md:text-left">
        <div className="body-text">
          <h1>Thaweechai Phoonsawt</h1>
          <p>Or you can call me "Deaw".</p>
          <p>{identext}</p>
        </div>

        <div className="my-img">
          <img src={ytran} />
        </div>
      </div>

      <div className="skill-detail">
        <h1>skill detail</h1>

        <div className="skill-list">
          <div>
            <h2>Programming Language</h2>
            <ul>
              <li>C# Language : Intermediate</li>
              <li>HTML / Css : Intermediate</li>
              <li>Java script / JSX : Basic</li>
            </ul>
          </div>

          <div>
            <h2>Framework and Libraries</h2>
            <ul>
              <li>
                {" "}
                <FaUnity /> Unity Engine : Intermediate
              </li>
              <li>
                {" "}
                <FaReact /> React : Intermediate
              </li>
              <li>
                {" "}
                <SiRobloxstudio /> Roblox Studio : Basic
              </li>
              <li>
                {" "}
                <RiNextjsLine /> Next.js : Beginner
              </li>
              <li>
                {" "}
                <RiTailwindCssFill /> Tailwind : Beginner
              </li>
            </ul>
          </div>

          <div>
            <h2>Other Program</h2>
            <ul>
              <li>
                {" "}
                <SiAdobephotoshop /> Adobe Photoshop : Intermediate
              </li>
              <li>
                {" "}
                <DiVisualstudio /> Visual Code : Intermediate
              </li>
              <li>
                {" "}
                <SiAdobepremierepro /> Adobe Premiere pro : Basic
              </li>
              <li>
                {" "}
                <SiAdobeaftereffects /> Adobe Aftereffect : Beginner
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="skills">
        <h1>My Skill</h1>
        <div className="skill-list">
          <div>
            <img src={unity} />
          </div>
          <div>
            <img src={csharp} />
          </div>
          <div>
            <img src={lua} />
          </div>

          <div>
            <img src={vsc} />
          </div>

          <div>
            <img src={reactLogo} />
          </div>

          <div>
            <img src={pr} />
          </div>
          <div>
            <img src={ae} />
          </div>
          <div>
            <img src={ps} />
          </div>
        </div>
      </div>

      <div className="contact">
        <h1>Contact:</h1>
        <h2>098-336-0990</h2>
        <h2>thaweechai0004@gmail.com</h2>
      </div>

      <Bottom />
    </motion.div>
  );
}
