import gameplay from "../assets/gameplay.jpg";
import "./Metamorpage.css";
import HeaderComp from "../components/HeaderComp";
import Bottom from "../components/Bottom";
import { Link } from "react-router-dom";
import Template from "../components/Template";
import { Typewriter } from "react-simple-typewriter";

import {
  Button01,
  Button02,
  Youtubevideoplayer,
} from "../components/ButtonsComp";

import { transinorm ,elementanim} from "./Animations";
import { motion } from "framer-motion";

import {
  chasestate,
  Idlestate,
  patrolstate,
  state,
  golem_code1,
  golem_code2,
  griffinscript,
  nymph_code1,
  nymph_code2,
  time_scirpt,
  werewolf_code,
} from "../components/imagescomp";

export default function Metamorpage() {

  const feature = [
    { id: 1, name: "Health System" },
    { id: 2, name: "Dead and Respawn System" },
    { id: 3, name: "Interact With NPC" },
    { id: 4, name: "Dialog System with Choice" },
    { id: 5, name: "Weapon System Sword and Rifle (Rifle is download asset)" },
    { id: 6, name: "Rifle needed manual Bolt Action for each shot." },
    { id: 7, name: "Sword will knockback some enemy some of them will not" },
  ];

  return (
    <motion.div {...transinorm}>
      <div className="Header-2">
        <motion.div {...transinorm}>
          <h1>Game Development</h1>
          <h6>Every pixel art credit to Jirateep Muangdee & Chanyanut </h6>
          <p>This is the first website I've ever deployed</p>
          <Button01
          buttonname="Website source code"
          linkurl={"https://github.com/deaw667/Personal_Portfolio_65"}
        />
        </motion.div>
      </div>

      <div>
        <motion.div {...transinorm} className="seperated-container"
        >
          <div className="left-container">
            <div className="seperated-container-vid">
              <iframe
                width="640"
                height="480"
                src="https://www.youtube.com/embed/CShKCkOgJHg"
                title="Metamorphoses Final Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <h1>Project Metamorphoses</h1>
            <p>
              Metamorphoses is a survival top down view pixel art style game.
              The main feature of this game is every day in game passing will
              randomly change the forest zone pattern That it will choosing from
              existed layout that I created. In my team it got 2 artist and 1
              programmer that is me. This is my biggest game I ever create in
              Unity. And I expect to continue developing this game. Until I get
              to the point where I'm satisfied or be able to sale.
            </p>
          </div>
          <div className="right-container">
            <h1>Feature and System</h1>
            <h2>Player</h2>
            <ul>
              {feature.map((item, id) => (
                <li key={id}>{item.name}</li>
              ))}
            </ul>

            <h2>Inventory & Item</h2>
            <ul>
              <li>Item slot with stackable , drag and drop</li>
              <li>Potion and Usable item , weapon item swap</li>
              <li>Hotbar system</li>
              <li>Crafting System</li>
              <li>Armor slot (Prototype)</li>
              <li>Item Notification</li>
              <li>Item Pickup</li>
            </ul>

            <h2>Enemy</h2>
            <ul>
              <li>Health System</li>
              <li>Boss Health Bar</li>
              <li>Enemy State Idle , Patrol , Chase , Attacking</li>
              <li>Some of enemy have charging range.</li>
              <li>
                Unique Attack style enemy like Golem , Nymph , Griffin and Last
                Boss Werewolf
              </li>
              <li>Item Notification</li>
              <li>Item drop from enemy with rate drop</li>
            </ul>

            <h2>Misc Feature</h2>
            <ul>
              <li>Time System with a light transition</li>
              <li>Save and Load Game Data System</li>
              <li>Background and other sound System</li>
              <li>Main Menu (Unfinish)</li>
              <li>Portal System and will change the zone everyday</li>
              <li>Tutorial System</li>
              <li>Cursor changing</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="Header-3">
        <div>
          <img src={gameplay} />
        </div>
        <div>
          <div className="description">
            <h1>Detail Example Page</h1>
            <p>
              This page will show you a code from some of system in this game.
              And it will show a video of that system and maybe flowchart also.
              There will be many system that will not shown here cause of there
              are too many system to be able to put them all here.
            </p>
          </div>
        </div>
      </div>

      <div>
        <motion.div {...elementanim} className="body-container2">
          <motion.div {...elementanim} className="body-container2-header">
            <h1>Enemy System</h1>
          </motion.div>
          <motion.div {...elementanim} className="seperated-body2">
            <p>
              For the enemy system am using switch case for trigger a function
              in each enemy state currently having Idle, Patrol, Chase and
              Attack if player getting in chase range enemy will start chasing
              player and when player in not in chase range the enemy will random
              state between Idle and Patrol. In the Idle and Patrol state will
              check if there is player inside chase range so in chase range will
              be check if player in attack range and in attack range will check
              if player out of attack range I using this way because there is no
              way player will be in attack range before in chase range so in
              idle or patrol it no need to check is player in attack range. Am
              Using single script to create various enemy types by changing
              attack speed , chase speed , attack damage , is that enemy will
              stop when attacking , attack range, health etc. By the way how
              enemy will dealing damage is by using a function and call it in
              Animation event for accurate animation and attack in dealing
              damage function will check if player in damage range if not will
              do nothing.
            </p>
            <div className="des-image">
              <div className="des-image-vid">
                <Youtubevideoplayer
                  vidurl={
                    "https://www.youtube.com/embed/RM3OO0FFhlo?rel=0&modestbranding=1&controls=0&autoplay=1&loop=1&mute=1&playlist=RM3OO0FFhlo"
                  }
                />
              </div>
            </div>
          </motion.div>
          <motion.div {...elementanim} className="lower-des-image">
            <img src={state} />
            <img src={Idlestate} />
            <img src={chasestate} />
            <img src={patrolstate} />
          </motion.div>
        </motion.div>
      </div>

      <div>
        <div className="body-container3">
          <motion.div {...elementanim} className="body-container3-header">
            <h1>Enemy Unique Type</h1>
          </motion.div>

          <Template
            title="Griffin"
            text={[
              "Before Griffin will dive attack will store a last player position and moving forward to that position so that mean griffin didn't moving to current player position but moving to player last 1 second position for balance to player and make player can be dodge the attack easier and SavePlayerPosition will be call in the animation event before the attack start 1-2 frame.",
            ]}
            images={[]}
            imageslower={[griffinscript]}
            isgit={true}
            linkurl="https://github.com/deaw667/Metamorphoses_Prototype/blob/main/Script/Monster/Griffin.cs"
            video={
              "https://www.youtube.com/embed/3khnk_tqoOs?rel=0&modestbranding=1&controls=0&autoplay=1&loop=1&mute=1&playlist=3khnk_tqoOs"
            }
          />

          <Template
            title="Golem"
            text={[
              "Golem will charge up the attack radius before attacking player by increase the scale of attack radius game Object. Am using a normal enemy script but create a bool to check if that enemy will charging range in Attack function. And Add function to stop increase a attack range in animation event in unity.",
            ]}
            images={[]}
            imageslower={[golem_code1, golem_code2]}
            video={
              "https://www.youtube.com/embed/SpMizG58-0Y?rel=0&modestbranding=1&controls=0&autoplay=1&loop=1&mute=1&playlist=SpMizG58-0Y"
            }
          />

          <Template
            title="Nymph"
            text={[
              "Nymph will not moving when she is attacking. She will fire a power ball toward the player position and it depend on how far is player between her as far as player at power ball will be more faster but if player nearly she power ball will be slower for balance as she is just a mini boss not a final boss Am using Normal enemy script too. But i will using EnemyShooting Function instead using of using AttackPlayer function this function will just instantiate a power ball and give them a direction and speed to rigidbody and the damage dealing will be in script that attach in power ball by detect collider tag player.",
            ]}
            images={[]}
            isgit={true}
            linkurl={
              "https://github.com/deaw667/Metamorphoses_Prototype/blob/main/Script/Enemy/EnemyBullet.cs"
            }
            imageslower={[nymph_code1, nymph_code2]}
            video={
              "https://www.youtube.com/embed/xhYMwQHtLQg?rel=0&modestbranding=1&controls=0&autoplay=1&loop=1&mute=1&playlist=xhYMwQHtLQg"
            }
          />
          <Template
            title="WereWolf Boss"
            text={[
              "Werewolf will have 2 different attacking move that will randomly using them. Werewolf is using normal enemy script but will be have bool to check if this enemy is a boss and it will random a style before start Attacking every time. after random a style in attacking will be check the result of attack style random. After this is normal just like other enemy but will be a bit different that enemy will have a health bar over the player hotbar. Only way that player will be able to face werewolf boss is by using a portal item so that when werewolf will be instantiate and the health bar will be set Active to true and adding a werewolf gameobject health to it",
            ]}
            images={[]}
            imageslower={[werewolf_code]}
            video={
              "https://www.youtube.com/embed/quBwEHmtnvQ?rel=0&modestbranding=1&controls=0&autoplay=1&loop=1&mute=1&playlist=quBwEHmtnvQ"
            }
          />
        </div>

        <div className="time-system">
          <motion.div {...elementanim} className="time-systemHead">
            <h1>Time system</h1>
          </motion.div>
          <Template
            title="Atmosphere and Clock"
            text={[
              "This game will be only save when the day is passing just like stardew valley but for different is when player is dead it will be reload that day so player will be need to passing that day to saving game.In Update function will be two main part is day passing system and clock system in part of clock system first currentTime is just a Deltatime that be able to speed up next am convert 86400 second of real time second per day to 1440 for make one day in game is 24 minute in real life so that mean each in game hour having 60 second the circle got 360 degree to fit 360 with 24 in game hour then i made every 15 degree is mean 1 hour on Ui. And the lowest one is just to show in game hour and minute in inspector.for day passing system because of maybe millisecond is not 1440.00 and it should to reset time every day so when it reach or higher 1440 will reset current time to 0 and then set time to 5 Am every day and it will save game , destroy every single enemy that exist in the forest zone. For light and atmosphere system it just using if else to check current time in update and lerp the light color to blue white and orange.",
            ]}
            isgit={true}
            linkurl={
              "https://github.com/deaw667/Metamorphoses_Prototype/blob/main/Script/Misc/ClockScript.cs"
            }
            images={[]}
            imageslower={[time_scirpt]}
            video={
              "https://www.youtube.com/embed/n_JN302ZrPw?rel=0&modestbranding=1&controls=0&autoplay=1&loop=1&mute=1&playlist=n_JN302ZrPw"
            }
          />
        </div>
      </div>
      <Bottom />
    </motion.div>
  );
}
