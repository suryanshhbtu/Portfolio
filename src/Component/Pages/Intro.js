import React, { Fragment } from 'react'
import { motion } from 'framer-motion';
import classes from "./Intro.module.css";
import profileImage from "../../res/profileImage.JPG";
const Intro = () => {
  return (
    <Fragment>
      <div className={classes.intro}>
        <motion.img className={classes.img}
        
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }} src={profileImage} alt="suryanshImage"
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.90 }} />
        <motion.div className={classes.header} animate={{ x: 20 }}>
          <p className={classes.p}>Welcome to my dynamic and visually captivating portfolio website! <br />
            <h1>This Is Suryansh Srivastava,</h1>
            A final-year B.Tech student at HBTU Kanpur.<br />
            I am thrilled to have you here as I showcase my skills, experiences,
            and ambitions in the software field. With a keen interest in learning
            new technologies and a passion for continuous growth,<br />
            I am ready to demonstrate my capabilities and explore exciting opportunities.
          </p>
        </motion.div>
      </div>
    </Fragment>
  )
}

export default Intro