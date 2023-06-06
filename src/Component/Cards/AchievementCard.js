import { Fragment } from 'react';
import React from "react";
import classes from "./AchievementCard.module.css";
const AchievementCard = (props) => {
    return (
        <Fragment className={classes.Fragment}>

            <div className={classes.header}>
                <div>
                    <ul className={classes.list}>
                        <li className={classes.name}>{props.achievementName}</li>
                    </ul>
                </div>
                <img className = {classes.image} src={require(`../../res/${props.achievementImg}`)}></img>
            </div>
        </Fragment>
    );
};

export default AchievementCard;