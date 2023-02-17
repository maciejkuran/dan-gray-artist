import classes from './FirstSection.module.css';
import img1 from '../../../assets/imgs/about-1.jpg';

const FirstSection = () => {
  return (
    <section className={classes['first-section']}>
      <div>
        <p>
          <span className="capitalized">D</span>aniel Gray was born on 21 November 1954 in Aurora,
          Colorado, USA. His life has always been filled with creativity.{' '}
        </p>
      </div>
      <img src={img1} alt="Dan Gray Artist Denver"></img>
    </section>
  );
};

export default FirstSection;
