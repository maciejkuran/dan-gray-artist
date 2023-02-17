import classes from './index.module.css';
import img from '../../assets/imgs/home-3.jpg';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton';
import Contact from '../../components/UI/Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <section className={classes.work}>
      <Link to=".." relative="path">
        <button>
          <FontAwesomeIcon icon={faArrowLeftLong} />
          BACK
        </button>
      </Link>
      <h1>The golden hour, 2017</h1>
      <p>acrylic on canvas, 30X40</p>
      <span className={classes['work__id']}>ID: 2446</span>
      <Contact title="Ask for availability and price" />
      <picture>
        <img src={img}></img>
      </picture>

      <div className={classes['work__button']}>
        <Link to=".." relative="path">
          <PrimaryButton>BACK</PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default Work;
