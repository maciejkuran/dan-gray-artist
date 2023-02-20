import classes from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={classes['footer']}>
      <p>
        Copyright©, Daniel Gray, designed & developed with 🤍 by{' '}
        <a target='_blank' href='https://maciejkuran.com'>
          maciejkuran.com
        </a>
      </p>
      <Link to='/privacy-policy'>Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
