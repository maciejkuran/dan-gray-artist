import classes from './index.module.css';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton';
import img1 from '../../assets/imgs/home-1.jpg';
import img2 from '../../assets/imgs/home-2.jpg';
import img3 from '../../assets/imgs/home-3.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <header className={classes['home__header']}>
        <h1>DANIEL GRAY</h1>
        <h2>CONTEMPORARY ARTIST</h2>
        <Link to="/about">
          <PrimaryButton className>GET STARTED</PrimaryButton>
        </Link>
      </header>

      <div className={classes['home__background']}>
        <img src={img2} alt="Dan Gray Denver Artist"></img>
      </div>

      <div className={classes['home__background']}>
        <img src={img1} alt="Dan Gray Denver Artist"></img>
      </div>

      <div className={classes['home__background']}>
        <img src={img3} alt="Dan Gray Denver Artist"></img>
      </div>
    </main>
  );
};

export default Home;
