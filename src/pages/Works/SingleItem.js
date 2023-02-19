import classes from './SingleItem.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SingleItem = ({ work }) => {
  return (
    <Link to={work.id}>
      <div className={classes['single-item']}>
        <img src={work.img} alt={work.title}></img>
        <div>
          <h4>
            {work.title}
            {work.year !== 'undefined' ? `, ${work.year}` : ''}
          </h4>
          <p>
            {work.type}, {work.size}
          </p>
        </div>
        <button>
          view <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </Link>
  );
};

export default SingleItem;
