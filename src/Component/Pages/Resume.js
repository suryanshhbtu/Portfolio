import { Fragment } from 'react';
import React from "react";
import resume from "../../res/SuryanshResumeFinal.pdf";
import classes from "./Resume.module.css"
const Resume = () => {
    const handleDownload = () => {
        const fileUrl = process.env.PUBLIC_URL + '/SuryanshResumeFinal.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'SuryanshResumeFinal.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <Fragment>
        <div className={classes.div}>
            <button className={classes.button} onClick={handleDownload}>
                Download File
            </button>
            <br/>
        </div>
            <embed src={resume} className={classes.img} />
            </Fragment>


    );
};

export default Resume;