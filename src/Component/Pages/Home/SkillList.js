import { Fragment } from 'react';
import React from "react";
import classes from "./SkillList.module.css";
const SkillList = (props) => {
  


  return (
    <Fragment>
        <div className={classes.header}>
        <ul className={classes.list}>
          <li className={classes.list_item}>JAVA</li>
          <li className={classes.list_item}>Data Structures And Algorithm</li>
          <li className={classes.list_item}>Problem Solveing</li>
          <li className={classes.list_item}>Android Development using JAVA</li>
          <li className={classes.list_item}>ReactJS</li>
          <li className={classes.list_item}>NodeJS</li>
          <li className={classes.list_item}>MongoDB</li>
          <li className={classes.list_item}>Sqlite3</li>
          <li  className={classes.list_item}>Javascript</li>
          <li  className={classes.list_item}>Firebase</li>
          <li  className={classes.list_item}>MySQL</li>
          <li  className={classes.list_item}>XML</li>
        </ul>
        </div>
    </Fragment>
  );
};

export default SkillList;