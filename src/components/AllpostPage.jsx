import "./AllpostPage.css";
import HeaderComp from "./HeaderComp";
import roblox from "../assets/robloxback.png";
import Post from "./Post";
import { useState } from "react";
import Bottom from "./Bottom";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import frog from "../assets/frogjump.png";
import { motion } from "framer-motion";
import { rizzonroad_lobby, incomeoutcomeweb } from "../components/imagescomp";

import {
  Button01,
  Button02,
  Youtubevideoplayer,
} from "../components/ButtonsComp";

import { transinorm } from "./Animations";

export default function AllpostPage() {
  const [search, setSearch] = useState(""); // store search text

  const [posts] = useState([
    {
      id: 1,
      name: incomeoutcomeweb,
      title: "Web app Calendar",
      text: "This is my first webapp I have created by React. Unfortunately there is no backend in this project yet. Every data is store in Localstorage in your browser.",
      page: "/page4",
      pagename: "Page1",
    },
    {
      id: 2,
      name: roblox,
      title: "Free Time Game Development",
      text: "Here will show a game that I develop in my free time this will include 1 unity game, 2 roblox game and 1 game server i used to do. This here will show what i do for fun in my free time and improving my skill in the same time.",
      page: "/page4",
      pagename: "Page2",
    },
    {
      id: 3,
      name: rizzonroad_lobby,
      title: "My First Game Design",
      text: "Rizz On Road is a game desing concept for online multiplayer game for Promote tourist attractions at Ratchadamnoen Road.",
      page: "/page4",
      pagename: "Page3",
    },
    {
      id: 4,
      name: frog,
      title: "Dodge Frog. My First Game",
      text: "This game is endless game that will let's you play as frog that need to dodge a obstacle and collecting the coin for score.",
      page: "/page4",
      pagename: "Page4",
    },
  ]);

  // filter posts based on search text
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div {...transinorm}>
      <div className="Allpost">
        <div className="top-menu">
          <h1>All post</h1>
          <div className="search-tab">
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="search-icon" />
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          filteredPosts.map((item) => <Post key={item.id} item={item} />)
        ) : (
          <p>No posts found</p>
        )}
      </div>

      <Bottom />
    </motion.div>
  );
}
