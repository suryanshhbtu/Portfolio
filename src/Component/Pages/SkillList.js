import { Fragment } from 'react';
import React from "react";
import classes from "./Home.module.css";
import AboutMeHome from './AboutMeHome';
const SkillList = (props) => {
  


  return (
    <Fragment>
        <div className={classes.header}>
        <p className={classes.p}>Momdik Welcome to my dynamic and visually captivating portfolio website! <br/>
         I am Suryansh Srivastava, a final-year B.Tech student at HBTU Kanpur.<br/>
          I am thrilled to have you here as I showcase my skills, experiences, 
          and ambitions in the software field. With a keen interest in learning 
          new technologies and a passion for continuous growth, 
          I am ready to demonstrate my capabilities and explore exciting opportunities.
          </p>
        </div>
    </Fragment>
  );
};

export default SkillList;