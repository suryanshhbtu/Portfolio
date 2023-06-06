import { Fragment } from 'react';
import React from "react";
import classes from "./ProjectCard.module.css";
const ProjectCard = (props) => {
    return (
        <Fragment className={classes.Fragment}>

            <div className={classes.header}>
                <div>
                    <ul className={classes.list}>
                        <li className={classes.projectName}>{props.projectName}</li>
                        <br></br>
                        <li className={classes.projectDesc}>{props.projectDesc}</li>
                        <br/>
                        <li className={classes.projectTech}>{props.projectTech}</li>
                    </ul>
                </div>
                <img className = {classes.image} src={require(`../../res/${props.projectImg}`)} alt={props.projectName}></img>
            </div>
        </Fragment>
    );
};

export default ProjectCard;