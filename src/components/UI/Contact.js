import classes from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = props => {
  return (
    <a className={classes.contact} href="mailto:grayd2003@yahoo.com>">
      <span className={classes['work__email']}>
        <FontAwesomeIcon icon={faEnvelope} />
      </span>
      {props.title}
    </a>
  );
};

export default Contact;
