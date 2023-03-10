import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import classes from './Navbar.module.css';
import CloseButton from '../components/UI/Buttons/CloseButton';

import { NavLink, Link, useNavigation, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileNavIsActive, setMobileNavIsActive] = useState(false);
  const [showNavOnScroll, setShowNavOnScroll] = useState(true);
  const navigation = useNavigation();
  const { pathname } = useLocation();

  //Hiding mobile nav container when path changes
  useEffect(() => {
    setMobileNavIsActive(false);
  }, [pathname]);

  //Setting spinner when navigating to a different route
  const spinner =
    navigation.state === 'loading' ? <span className='loader'></span> : '';

  //Displaying and hiding mobile nav container
  const showMobileNavHandler = () => {
    setMobileNavIsActive(true);
  };

  const hideMobileNavHandler = () => {
    setMobileNavIsActive(false);
  };

  const navMobileClassName = mobileNavIsActive
    ? classes['nav__items--active']
    : classes['nav__items--inactive'];
  //________________________________

  //Hiding and showing nav when scroll up
  useEffect(() => {
    let prevScrollPosition = 0;
    let curScrollPosition = 0;

    window.addEventListener('scroll', () => {
      curScrollPosition = window.pageYOffset;

      if (curScrollPosition > prevScrollPosition) {
        setShowNavOnScroll(false);
        setMobileNavIsActive(false);
      } else {
        setShowNavOnScroll(true);
      }
      prevScrollPosition = curScrollPosition;

      //preventing bounce effect on mobile
      if (curScrollPosition <= 100) setShowNavOnScroll(true);
    });
  }, []);

  const navClassName = showNavOnScroll ? classes['nav--active'] : '';

  return (
    <>
      <nav className={`${classes.nav} ${navClassName}`}>
        <div className={classes['nav__wrapper']}>
          <Link to='/'>
            <h4>DAN GRAY</h4>
          </Link>
          <ul className={`${classes['nav__items']} ${navMobileClassName}`}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : classes.inactive
                }
                to='about'
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : classes.inactive
                }
                to='works'
                end
              >
                WORKS
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : classes.inactive
                }
                to='commissions'
              >
                COMMISSIONS
              </NavLink>
            </li>
            <CloseButton
              attributes={{ onClick: hideMobileNavHandler }}
              className={classes['close-btn']}
            />
          </ul>
          <button
            onClick={showMobileNavHandler}
            className={classes['nav__burger']}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>
      {spinner}
    </>
  );
};

export default Navbar;
