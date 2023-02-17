import classes from './ThirdSection.module.css';
import img from '../../../assets/imgs/about-3.jpg';
import PrimaryButton from '../../../components/UI/Buttons/PrimaryButton';
import { Link } from 'react-router-dom';

const ThirdSection = () => {
  return (
    <section className={classes['third-section']}>
      <div className={classes['third-section__wrapper']}>
        <div className={classes['third-section__text-wrapper']}>
          <h3>Life values</h3>
          <p>
            <span className="capitalized">D</span>aniel has always been a cordial person. He has
            helped many people, selflessly. If there is good in this world, it is Daniel.
          </p>
          <p>
            Daniel can give good advice and support. In Denver, in the area where he lives, he will
            help a neighbor make a minor repair. He sometimes bakes cookies, and when he does it, he
            packs them into packages and distributes them to neighbors.
          </p>
          <p>
            In everyday life, he is a modest and quiet person. He loves to surround himself with
            nature. He takes care of his garden daily.
          </p>
        </div>
        <img src={img} alt="Dan Gray Artist Denver"></img>
      </div>
      <Link to="/works">
        <div className={classes['third-section__button']}>
          <PrimaryButton>WORKS</PrimaryButton>
        </div>
      </Link>
    </section>
  );
};

export default ThirdSection;
