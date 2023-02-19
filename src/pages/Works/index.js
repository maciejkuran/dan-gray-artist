import classes from './index.module.css';
import SingleItem from './SingleItem';
import H1Header from '../../components/UI/H1Header';
import { API_URL } from '../../config/firebase';
import { useLoaderData } from 'react-router-dom';

const Works = () => {
  const data = useLoaderData();
  const formattedData = [];

  for (const key in data) {
    formattedData.push({
      img: data[key].img,
      size: data[key].size,
      title: data[key].title,
      type: data[key].type,
      year: data[key].year,
      id: key,
    });
  }

  return (
    <section>
      <H1Header title='WORKS' />
      <div className={`${classes['works__grid']} default-animation`}>
        {formattedData.map(work => (
          <SingleItem key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Works;

export const loader = async () => {
  const res = await fetch(`${API_URL}/works.json`);

  if (!res.ok)
    throw new Response(
      JSON.stringify({ message: 'Problem occured while fetching data.' }),
      {
        status: 500,
      }
    );

  return res;
};
