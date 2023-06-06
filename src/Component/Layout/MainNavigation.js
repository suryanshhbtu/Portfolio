import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {


  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => {
    setShowMenu(false);
  }
  const handleClickMenu = () => {
    setShowMenu((prevState) => (!prevState));
  }


  return (
    <header className={classes.header}>


      <NavLink to='/' >
        <div className={classes.logo}>Suryansh Srivastava</div>
      </NavLink>
      <nav>
        <div onClick={handleClickMenu} className={classes.nav_icon}>
          {showMenu ? <FiX /> : <FiMenu />}
        </div>
        <ul className={showMenu ? classes.nav_link_active : classes.nav_link} >
        <li onClick={closeMenu} className={classes.nav_item}>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li onClick={closeMenu} className={classes.nav_item}>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li onClick={closeMenu} className={classes.nav_item}>
            <NavLink to='/achievements'>Achievements</NavLink>
          </li>
          <li onClick={closeMenu} className={classes.nav_item}>
            <NavLink to='/profile'>Profile</NavLink>
          </li>
          <li onClick={closeMenu} className={classes.nav_item}>
            <NavLink to='/Resume'>Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;