import { Fragment } from 'react';
import React from "react";
import classes from "./AboutMeHome.module.css";
const AboutMeHome = (props) => {



  return (
    <Fragment>
      <div className={classes.header}>
      {/* <p className={classes.p}><h2> Interests</h2><br/></p> */}
         <p className={classes.p}> Passionate about Data Structures and Algorithms: Excelling in Problem Solving.</p>
        <br />
        <p className={classes.p}>Task Completion Commitment: Dedicated to Seeing Projects Through.</p>
        <br />
        <p className={classes.p}>Adapting to New Tech: Ready to Learn and Implement.</p>
        <br />
        <p className={classes.p}>Enthusiastic Learner: Eager to Enhance Skills.</p>
        <br />
        <p className={classes.p}>Building Strong Foundations: Mastering Data Structures and Algorithms.</p>
        <br />
        <p className={classes.p}>Precise Problem Solver: Utilizing Data Structures and Algorithms.</p>
        <br />
      </div>
    </Fragment>
  );
};

export default AboutMeHome;