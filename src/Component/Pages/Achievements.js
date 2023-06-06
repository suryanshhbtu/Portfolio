import { Fragment } from 'react';
import React from "react";
import AchievementCard from '../Cards/AchievementCard';

const Achievements = () => {
  const achievements = [
    {
      achievementName : "1st prize in Technika Red-Pencil Event",
      achievementImg: "technika.JPG"
    },
    {
      achievementName : "Completed ReactJS Course",
      achievementImg: "react.JPG"
    },
    {
      achievementName : "Solved more than 700 problems on Leetcode.",
      achievementImg: "leetcode.JPG"
    },
    {
      achievementName : "Solved more than 700 problems on GFG.",
      achievementImg: "gfg.JPG"
    },
    {
      achievementName : "Aggregate of 8.5 CGPA till Now.",
      achievementImg: "gfg.JPG"
    },
  ]

  return (
    <Fragment>
      {achievements.map((achievement) => {
        return (
          <AchievementCard
            achievementName ={achievement.achievementName}
            achievementImg = {achievement.achievementImg}/>)

      })}


    </Fragment>
  );
};

export default Achievements;