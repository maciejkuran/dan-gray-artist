import classes from './index.module.css';
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton';
import Contact from '../../components/UI/Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link, json, useLoaderData } from 'react-router-dom';
import { API_URL } from '../../config/firebase';

const Work = () => {
  const work = useLoaderData();

  return (
    <section className={`${classes.work} default-animation`}>
      <Link to='..' relative='path'>
        <button>
          <FontAwesomeIcon icon={faArrowLeftLong} />
          BACK
        </button>
      </Link>
      <h1>
        {work.title}
        {work.year !== 'undefined' ? `, ${work.year}` : ''}
      </h1>
      <p>
        {work.type}, {work.size}
      </p>
      <span className={classes['work__id']}>ID: {work.id}</span>
      <Contact title='Ask for availability and price' />
      <picture>
        <img src={work.img}></img>
      </picture>

      <div className={classes['work__button']}>
        <Link to='..' relative='path'>
          <PrimaryButton>BACK</PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default Work;

export const loader = async ({ request, params }) => {
  const id = params.workId;

  const res = await fetch(`${API_URL}/works/${id}.json`);

  if (!res.ok)
    return json(
      { message: 'Could not fetch data. Please try again!' },
      { status: 500 }
    );

  const data = await res.json();

  return { ...data, id: id };
};
