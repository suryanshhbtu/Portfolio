import { Fragment } from 'react';
import React from "react";
import AboutMeHome from './AboutMeHome';
import Projects from './Projects';
import SkillList from './Home/SkillList';
import SubHeading from './Home/SubHeading';
import Achievements from './Achievements';
import Resume from './Resume';
import Intro from './Intro';
import classes from './Home.module.css';

import { Animator, Fade, FadeIn, FadeOut, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, batch } from 'react-scroll-motion';
const Home = (props) => {

  const zoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <ScrollContainer> 
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), MoveOut())}>
          <Intro />
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={Zoom(0.5)}>
          <AboutMeHome />
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={zoomInScrollOut}>
          <SubHeading heading="SKILLS" />
          <SkillList />
        </Animator>
      </ScrollPage>
          <SubHeading heading="PROJECTS" />
          <Projects />
      <SubHeading heading="ACHIEVEMENTS" />
      <Achievements />
      <SubHeading heading="RESUME" />
      <Resume />
      {/* <SubHeading heading="PROJECTS"/>
      <Projects /> */}
    </ScrollContainer>

  );
};

export default Home;