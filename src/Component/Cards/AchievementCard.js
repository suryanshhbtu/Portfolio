import { Fragment } from 'react';
import React from "react";
import classes from "./AchievementCard.module.css";
const AchievementCard = (props) => {
    return (
        <Fragment className={classes.Fragment}>

            <div className={classes.header}>
                <div className={classes.list}>
                        <p className={classes.name}>{props.achievementName}</p>
                        <img className={classes.image} alt = {props.achievementName} src={require(`../../res/${props.achievementImg}`)}></img>
                </div>
            </div>
        </Fragment>
    );
};

export default AchievementCard;