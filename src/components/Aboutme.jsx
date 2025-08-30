import HeaderComp from "./HeaderComp";
import gameplay from "../assets/gameplay.jpg";
import ytran from "../assets/1ytran.jpg";
import "./Aboutme.css"
import Bottom from "./Bottom";
import unity from "../assets/icons/unityengine.png"
import maya from "../assets/icons/MAYA.png"
import lua from "../assets/icons/LUA.png"
import ps from "../assets/icons/PS.png"
import pr from "../assets/icons/PR.png"
import vsc from "../assets/icons/VSC.png"
import ae from "../assets/icons/AE.png"
import csharp from "../assets/icons/CSharp.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Aboutme() {
    const [skilllist, setSkill]=useState([
        {id:1, img:unity},
        {id:2, img:csharp},
    ])

    const identext = "I am graduated from Walailak University, majoring in Multimedia Animation and Games. My favorite hobby is Creating a game in different platform like unity, roblox, unreal, Or even modding the random game. I'm ready to keep improving my skills.You can contact me by the You can contact us via the channels below here." 
    
    return(
        <motion.div initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
            <div className="body-comp">
                <div className="body-text">
                    <h1>Thaweechai Phoonsawt</h1>
                    <p>Or you can call me "Deaw".</p>
                    <p>{identext}</p>
                </div>

                <div className="my-img">          
                    <img src={ytran}/>
                </div>
            </div>  

        <div className="skills">
            <h1>My Skill</h1>
            <div className="skill-list">
                <div>
                    <img src={unity}/>
                </div>

                <div>
                    <img src={csharp}/>
                </div>
                <div>
                    <img src={lua}/>
                </div>

                <div>
                    <img src={vsc}/>
                </div>
                <div>
                    <img src={pr}/>
                </div>
                <div>
                    <img src={ae}/>
                </div>
                <div>
                    <img src={ps}/>
                </div>
                <div>
                    <img src={vsc}/>
                </div>
            </div>  
        </div>    

        <div className="contact">
            <h1>Contact:</h1>
            <h2>098-336-0990</h2>
            <h2>thaweechai0004@gmail.com</h2>
        </div>

            <Bottom/>  
        </motion.div>
    );
}