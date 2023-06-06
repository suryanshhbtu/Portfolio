import { Fragment } from 'react';
import React from "react";
import classes from "./AboutMeHome.module.css";
const AboutMeHome = (props) => {
  


  return (
    <Fragment>
        <div className={classes.header}>
        <p className={classes.p}>
        Get to know the person behind the screen.<br/>
          </p>
        </div>
        <div className={classes.header}>
        <p className={classes.p}>
        Dive into the breadth of my skill set, where I have honed my proficiency in various domains. <br/>
          </p>
        </div>
    </Fragment>
  );
};

export default AboutMeHome;