import { Fragment } from 'react';
import React from "react";
import classes from "./SubHeading.module.css";
const SubHeading = (props) => {
  


  return (
    <Fragment>
        <div className={classes.header}>
        <p className={classes.p}>
        {props.heading}
        </p>
        </div>
    </Fragment>
  );
};

export default SubHeading;