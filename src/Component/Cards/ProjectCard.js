import { Fragment } from 'react';
import React from "react";
import classes from "./ProjectCard.module.css";
const ProjectCard = (props) => {
    return (
        <Fragment className={classes.fragment}>

            <div className={classes.header}>
                <div className={classes.p}>
                        <p className={classes.projectName}>{props.projectName}</p>
                    <img className = {classes.image} src={require(`../../res/${props.projectImg}`)} alt={props.projectName}></img>
                        
                        <p className={classes.projectDesc}>{props.projectDesc}</p>
                       
                        <p className={classes.projectTech}>{props.projectTech}</p>
                    
                </div>
            </div>
        </Fragment>
    );
};

export default ProjectCard;