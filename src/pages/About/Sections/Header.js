import classes from './Header.module.css';
import H1Header from '../../../components/UI/H1Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className={classes.header}>
      <H1Header title="ABOUT" />
      <div className={classes['header__quote']}>
        <div>
          <p className={classes['header__quote--text']}>
            <span className="capitalized">W</span>hen it comes to asking Dan to tell something about
            himself, there comes silence. He knows that words don't carry as much weight as actions.
            If there is good in this world, it is Daniel. Thank you my best friend.
          </p>
          <div className={classes['header__quote__author']}>
            <p>
              <span>
                <FontAwesomeIcon icon={faQuoteRight} />
              </span>
              Maciej Kuran-Janowski
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
