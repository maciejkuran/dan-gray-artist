import classes from './SingleItem.module.css';
import img from '../../assets/imgs/home-2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const SingleItem = () => {
  return (
    <div className={classes['single-item']}>
      <img src={img} alt="title"></img>

      <div>
        <h4>The golden hour, 2017</h4>
        <p>acrylic on canvas, 30X40</p>
      </div>

      <button>
        view <FontAwesomeIcon icon={faArrowRightLong} />
      </button>
    </div>
  );
};

export default SingleItem;
