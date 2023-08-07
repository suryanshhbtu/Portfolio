import { useRef } from 'react';
import React from "react";
import AchievementCard from '../Cards/AchievementCard';


import classes from "./Achievements.module.css";

const achievements = [
  {
    achievementName: "1st prize in Technika Red-Pencil Event",
    achievementImg: "technika.JPG"
  },
  {
    achievementName: "Completed ReactJS Course",
    achievementImg: "react.JPG"
  },
  {
    achievementName: "Solved more than 750 problems on Leetcode.",
    achievementImg: "leetcode.JPG"
  },
  {
    achievementName: "Solved more than 800 problems on GFG.",
    achievementImg: "gfg.JPG"
  },
  // {
  //   achievementName: "Aggregate of 8.5 CGPA till Now.",
  //   achievementImg: "gfg.JPG"
  // },
]
const Achievements = () => {

      

  const ref = useRef(null);
  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
       
      </svg>
      <ul ref={ref} className={classes.list}>
      {achievements.map((achievement) => {
        return (
          <li>            <AchievementCard
              achievementName={achievement.achievementName}
              achievementImg={achievement.achievementImg} />
              </li>

          )
      })}
      </ul>
    </>
  );
};
export default Achievements;