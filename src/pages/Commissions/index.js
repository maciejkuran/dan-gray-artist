import classes from './index.module.css';
import H1Header from '../../components/UI/H1Header';
import Contact from '../../components/UI/Contact';
import { API_URL } from '../../config/firebase';
import { json, useLoaderData } from 'react-router-dom';

const Commissions = () => {
  const data = useLoaderData();

  const imgs = [];
  for (const key in data) {
    imgs.push(data[key].img);
  }

  return (
    <section className={classes['commissions']}>
      <H1Header title="COMMISSIONS" />
      <div className="default-animation ">
        <p>
          Are you excited about having your pet portrait?<br></br> Contact Daniel and discuss the
          work details.
        </p>
        <Contact title="Contact" />
        <div className={classes['commissions__grid']}>
          {imgs.map(url => (
            <div key={url}>
              <img src={url}></img>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commissions;

export const loader = async () => {
  const res = await fetch(`${API_URL}/portraits.json`);

  if (!res.ok)
    return json({ message: 'Problems with loading images. Please try again!' }, { status: 500 });

  return res;
};
