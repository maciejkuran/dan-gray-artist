import classes from './index.module.css';
import SingleItem from './SingleItem';
import H1Header from '../../components/UI/H1Header';

const Works = () => {
  return (
    <section>
      <H1Header title="WORKS" />
      <div className={`${classes['works__grid']} default-animation`}>
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </div>
    </section>
  );
};

export default Works;
