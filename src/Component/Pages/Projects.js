import {  useRef } from 'react';
import React from "react";
import ProjectCard from '../Cards/ProjectCard';
import classes from "./Projects.module.css";

const projects = [
  {
    _id:0,
    projectName: "Puzzle Game",
    projectDesc: "The Shivaji's Treasure game provides a Signup Page for creating accounts and a Login Page for registered users. The Home Page presents game rules and user progress, while the Profile Page displays scores, email, attempts, levels completed, time taken, and accuracy. The Question Page presents multiple-choice questions, requiring correct answers to progress. A Leaderboard showcases top players' scores and rankings. The game's Responsive UI ensures a smooth user experience across various screen sizes.",
    projectTech: "ReactJS, NodeJS, MongoDB, etc.",
    projectImg: "shivajiPuzzle.JPG"
  },
  {
    _id:1,
    projectName: "Cycle Rental Android ",
    projectDesc: "GreenRides is an app that simplifies renting cycles through QR code scanning. Users can download the app, sign up with their University email, and create a password. To rent a cycle, they scan the QR code on the desired cycle and confirm. Returning the cycle involves taking it to a stand with a guard who scans the QR code to complete the return process. Actual app usage and features may vary.",
    projectTech: "JAVA, Android Studio, etc.",
    projectImg: "cycle.JPG"
  },
  { _id:2,
    projectName: "Great Quote App",
    projectDesc: "Great Quotes is a web application built using ReactJS as the frontend framework and Firebase as the backend. It provides users with the ability to access and manage a collection of stored quotes. Users can add new quotes, delete existing ones, view quotes in full-screen mode for an immersive experience, and sort the quotes based on their preferences. This application offers a user-friendly interface and enables users to explore and interact with a curated collection of inspiring or thought-provoking quotes.",
    projectTech: "ReactJS, Firebase,  etc.",
    projectImg: "greatQuotes.JPG"
  },
  {
    _id:3,
    projectName: "Hisaab Kitaab",
    projectDesc: "Hisaab Kitaab is an Android application developed using Java and SQLite3 as the database. It serves as an expense tracker app, providing users with various functionalities for tracking their finances. The app allows users to store data related to credit and debit transactions, including the name of the transaction and details about the goods or services for which payments were made. Hisaab Kitaab aims to help users keep track of their expenses efficiently and effectively.",
    projectTech: "JAVA, sqlite3, etc.",
    projectImg: "hisaabKitaab.JPG"
  },
]
const Projects = () => {
  const ref = useRef(null);
  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
       
      </svg>
      <ul ref={ref} className={classes.list}>
      {projects.map((project) => {
        return (
          <li><ProjectCard
            projectName={project.projectName}
            projectDesc={project.projectDesc}
            projectTech={project.projectTech} 
            projectImg = {project.projectImg}/></li>
       )
      })}
      </ul>
    </>
  );
};

export default Projects;