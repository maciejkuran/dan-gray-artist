import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes['footer']}>
      <p>
        Copyright©, Daniel Gray, designed & developed with 🤍 by{' '}
        <a target="_blank" href="https://maciejkuran.com">
          maciejkuran.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
