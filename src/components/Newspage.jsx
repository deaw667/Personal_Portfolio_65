import HeaderComp from "./HeaderComp";
import Bottom from "./Bottom";
import "./Newspage.css";
import roblox from "../assets/robloxback.png";
import shooter from "../assets/shooterroblox.png";
import { useLocation } from "react-router-dom";
import {
  coregameloop,
  darker,
  lighternight,
  memorialimg,
  rizzonroad_lobby,
  frog_code,
} from "../components/imagescomp";

import { transinorm } from "./Animations";

import { Button01, Videoplayer, Imgresponsive, Youtubevideoplayer } from "./ButtonsComp";
import { motion } from "framer-motion";

const pageMap = {
  Page1,
  Page2,
  Page3,
};

export default function Newspage() {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) return <h1>No post data found</h1>;

  const PageComponent = pageMap[item.pagename];

  return (
    <motion.div {...transinorm}>
      <div className="text-container">
        <div>
          <div>
            {PageComponent ? <PageComponent /> : <h2>No page assigned</h2>}
          </div>
          <div></div>
        </div>
      </div>

      <Bottom />
    </motion.div>
  );
}

export function Page1() {
  return (
    <>
      <div className="page1-manage">
        <div>
          <h1>Free Time Game Development</h1>
          <p>
            Here will show a game that I develop in my free time this will
            include 1 unity game, 2 roblox game and 1 game server i used to do.
            This here will show what i do for fun in my free time and improving
            my skill in the same time.
          </p>
        </div>

        <div className="robloxgame-1">
          <h2>Roblox Game</h2>
          <p>
            Me and my friend used to create two roblox game there is game for
            just chilling and free for all pvp game
          </p>

          <div>
            <Imgresponsive title={"shooter"} imgsrc={[roblox]} />
          </div>

          <h2>Underground Bar</h2>
          <p>
            This map is for player communicate with each other in underground
            bar. It used Lua Language for coding the script that this game got
            is seating, car moving, drink and radio it got less script so I
            learned a lot about building design and interior design from making
            this game. More than programming. Anyway this game still on roblox
            that you can play on link below here.
          </p>
        </div>

        <div>
          <div>
            <Imgresponsive title={"shooter"} imgsrc={[shooter]} />
          </div>
          <h2>Free For All PvP</h2>
          <p>
            This game will let's player in and random a gun every time they dead
            and respawn there is a kill count dead count system for player. For
            now you will see a test dummy on top of the roof for testing gun
            while no one there. You can try this map on link below here.
          </p>
        </div>

        <div>
          <h2>Non-Profit Fivem Server</h2>
          <p>
            server that i created just for fun every profit I put on my vps
            server paid.
          </p>
          <Imgresponsive title={"memorialimg"} imgsrc={[memorialimg]} />
          <p>
            In free time I used to build a World War II themed Fivem server that
            I created for non profit purpose with my another one friend. I used
            my savings to rent a cheap VPS server to try out, and about 400-500
            people have already tried it. Even though it wasn't a good server it
            help me to learned about game management from doing this and it
            using Lua language for coding so it make me got some Lua skill
            aswell.But for now I stopped to develop it for personal issue. And
            this server is closed. You can see the develop path in my server
            discord down here from 2020-2023.
          </p>
          <p>
            There is so many thing I revamping from the base game just for fun
            or improving the game experience and it showing below here. But
            there is not all of system.
          </p>

          <h2>Revamping Tank Shell to Projectile</h2>
          <p>
            Normally in this game tank shell is not projectile and too short
            shot so i fix it by edit a flare ammo and adding a explosive ,
            damage , changing color , adding more force , lower the gravity
            effective to this object then i change the ammo of tank to this type
            ammo and done.
          </p>

          <Youtubevideoplayer vidurl={"https://www.youtube.com/embed/K0hBsoet7oc?rel=0&modestbranding=1&controls=0&autoplay=1&loop=1&mute=1&playlist=K0hBsoet7oc"} />

          <h2>Revamping First Person Camera</h2>
          <p>
            for normally first person shooting in this game look really weird so
            I try to moving a camera and the weapon position by finding in the
            gun file and edit it until it look good just like normal FPS game.
          </p>

          <Youtubevideoplayer vidurl={"https://www.youtube.com/embed/a0PTSuSFv6s?rel=0&modestbranding=1&controls=0&autoplay=1&loop=1&mute=1&playlist=a0PTSuSFv6s"} />

          <h2>Make Night Time is Darker</h2>
          <p>
            for normally in game night time is not dark enough or even not dark.
            so i manage to make night time is darker by finding Timecycle
            Modifiers in this link for some of them will make my night darker
            and create a script to check current time in game and trigger at 6
            PM. List of all Timecycle Modifiers is below here.
          </p>
          <Imgresponsive title={"dark"} imgsrc={[darker]} />
          <Imgresponsive title={"light"} imgsrc={[lighternight]} />
        </div>
      </div>
    </>
  );
}

export function Page2() {
  return (
    <>
      <div>
        <h1>Dodge Frog. My First Game</h1>
        <p>
          This game is endless game that will let's you play as frog that need
          to dodge a obstacle and collecting the coin for score.
        </p>
        <Youtubevideoplayer vidurl={"https://www.youtube.com/embed/Dohx5IKLQUE?rel=0&modestbranding=1&controls=0&autoplay=1&loop=1&mute=1&playlist=Dohx5IKLQUE"} />
      </div>

      <div>
        <h2>Game System</h2>
        <p>This game has the following system:</p>
        <ul>
          <li>Character control system Can walk left and right</li>
          <li>
            Health system that reduces every time you receive damage from
            obstacles
          </li>
          <li>Damage system that will reduce the player's health</li>
          <li>The system spawns obstacles from randomly set points </li>
          <li>and other basic information displayed on the screen</li>
        </ul>
      </div>

      <div>
        <Youtubevideoplayer vidurl={"https://www.youtube.com/embed/1x1hnUOI76Y?rel=0&modestbranding=1&controls=0&autoplay=1&loop=1&mute=1&playlist=1x1hnUOI76Y"} />
        <h2>How it Work</h2>
        <p>
          as you can see for now it have 3 different type of object that will
          falling from above a coin , spike ball and the iron cube. It using a
          same script but will random instantiate between this three thing on
          the position in array and the effect will be add the the object that
          falling like move faster, deal a damage, adding a coin count etc.{" "}
        </p>
        <Imgresponsive title={"code"} imgsrc={[frog_code]} />
      </div>
    </>
  );
}

export function Page3() {
  return (
    <>
      <div>
        <h1>Game Design Rizz On Road</h1>
        <p>
          Rizz On Road is a game desing concept for online multiplayer game for
          Promote tourist attractions at Ratchadamnoen Road.
        </p>
        <Imgresponsive title={"rizzonroad_lobby"} imgsrc={[rizzonroad_lobby]} />
      </div>

      <div>
        <h2>Game Overview</h2>
        <ul>
          <li>Game Title : Rizz On Road</li>
          <li>Genres : Casual Action</li>
          <li>Theme : Thailand Market Modern Aged</li>
          <li>Mode : Online Multiplayer</li>
          <li>Camera : Side view 2D</li>
          <li>Playtime : 10 - 20 min per Match</li>
          <li>Platform : Mobile</li>
          <li>Graphic Styles : 2D Chibi character</li>
        </ul>
      </div>

      <div>
        <h2>Key Feature</h2>
        <ul>
          <li>
            Form a team with friends And plan to spend the team's money to buy
            things from various stores. Checkpoint as many as you can and claim
            victory.
          </li>
          <li>Take on side missions to support your team's costs.</li>
          <li>Earn rewards and use them to develop your character.</li>
        </ul>
      </div>

      <div>
        <h2>Game Story</h2>
        <p>
          A group of friends like to travel to different places. of Thailand
          until the sound of Ratchadamnoen Road is a center for local products
          and cultural history, so they planned to visit there but accidentally
          ran into a group of tourists. Both have the same purpose, so they
          intend to compete to see who can spend more money at this place.
        </p>
      </div>

      <div>

      </div>

      <div>
        <h1>Ui Event State</h1>
        <Imgresponsive title={"coregameloop"} imgsrc={[coregameloop]}/>
      </div>

      <div>
        <h1>Gameplay paper prototype</h1>
        <Youtubevideoplayer vidurl={"https://www.youtube.com/embed/1Na3qG4ynCM?rel=0&modestbranding=1&controls=0&autoplay=1&loop=1&mute=1&playlist=1Na3qG4ynCM"} />
      </div>
    </>
  );
}
