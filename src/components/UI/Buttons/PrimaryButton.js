import classes from './PrimaryButton.module.css';

const PrimaryButton = props => {
  return (
    <button {...props.attributes} className={`${classes['primary-button']} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
