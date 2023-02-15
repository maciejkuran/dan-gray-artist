import Navbar from '../../layout/Navbar';
import classes from './RootLayout.module.css';

import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className={classes['root-main']}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
