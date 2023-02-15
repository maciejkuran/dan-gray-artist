import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import classes from './Navbar.module.css';
import CloseButton from '../components/UI/Buttons/CloseButton';

import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false);

  const showMobileNavHandler = () => {
    setMobileNavIsActive(true);
  };

  const hideMobileNavHandler = () => {
    setMobileNavIsActive(false);
  };

  const navMobileClassName = mobileNavIsActive
    ? classes['nav__items--active']
    : classes['nav__items--inactive'];

  return (
    <nav className={classes.nav}>
      <div className={classes['nav__wrapper']}>
        <Link to="/">
          <h4>DAN GRAY</h4>
        </Link>
        <ul className={`${classes['nav__items']} ${navMobileClassName}`}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : classes.inactive)}
              to="about"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : classes.inactive)}
              to="works"
            >
              WORKS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : classes.inactive)}
              to="commissions"
            >
              COMMISSIONS
            </NavLink>
          </li>
          <CloseButton
            attributes={{ onClick: hideMobileNavHandler }}
            className={classes['close-btn']}
          />
        </ul>
        <button onClick={showMobileNavHandler} className={classes['nav__burger']}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
