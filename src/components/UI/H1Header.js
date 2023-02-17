import classes from './H1Header.module.css';

const H1Header = props => {
  return (
    <div className={classes['h1-header']}>
      <div></div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default H1Header;
