import { Fragment } from 'react';
import React from "react";
import classes from "./Home.module.css";
import AboutMeHome from './AboutMeHome';
import Projects from './Projects';
import profileImage from "../../res/profileImage.JPG";
import SkillList from './Home/SkillList';
import SubHeading from './Home/SubHeading';
import Achievements from './Achievements';
import Resume from './Resume';
const Home = (props) => {



  return (
    <Fragment >

      <div className={classes.intro}>
        <img className={classes.img} src={profileImage} alt="suryanshImage"/>
        <div className={classes.header}>
          <p className={classes.p}>Welcome to my dynamic and visually captivating portfolio website! <br />
            <h2>This Is Suryansh Srivastava,</h2>
            A final-year B.Tech student at HBTU Kanpur.<br />
            I am thrilled to have you here as I showcase my skills, experiences,
            and ambitions in the software field. With a keen interest in learning
            new technologies and a passion for continuous growth,<br />
            I am ready to demonstrate my capabilities and explore exciting opportunities.
          </p>
        </div>
      </div>
      <AboutMeHome />
      <SubHeading heading="SKILLS"/>
      <SkillList />
      <SubHeading heading="PROJECTS"/>
      <Projects />
      <SubHeading heading="ACHIEVEMENTS"/>
      <Achievements />
      <SubHeading heading="RESUME"/>
      <Resume />
      
      {/* <SubHeading heading="PROJECTS"/>
      <Projects /> */}
    </Fragment>
  );
};

export default Home;