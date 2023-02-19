import classes from './index.module.css';
import { useRouteError } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

const Error = () => {
  const error = useRouteError();
  let message;

  if (error.status === 404) message = '404! Sorry, page not found';
  if (error.status === 500) message = JSON.parse(error.data).message;
  if (error.status === 400) message = JSON.parse(error.data).message;

  return (
    <>
      <Navbar />
      <header className={classes['error']}>
        <h1>Oops... {message}</h1>
        <p>Don't worry. Please try again! 😉</p>
      </header>
    </>
  );
};

export default Error;
