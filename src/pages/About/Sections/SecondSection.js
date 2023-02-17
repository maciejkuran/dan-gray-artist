import classes from './SecondSection.module.css';
import img from '../../../assets/imgs/about-2.jpg';

const SecondSection = () => {
  return (
    <section className={classes['second-section']}>
      <div className={classes['second-section__wrapper']}>
        <div className={classes['left']}>
          <h3>Stained glass studio</h3>
          <p>
            <span className="capitalized">D</span>aniel in his early adult life became a local
            entrepreneur by establishing a stained glass studio. He performed his work for local
            institutions and homes. Remaining independent in life played an important role. He
            always claimed that he doesn't need much to live peacefully.
          </p>
        </div>
        <div>
          <h2>Painting</h2>
          <p>
            <span className="capitalized">I</span>n the 90s he began his adventure with painting. He
            specializes in a modern, abstract style. Daniel shows diversity in his works. We can see
            landscapes, human figures, and much more. He never wanted to limit himself to one
            subject.
          </p>
          <p>
            Daniel paints spontaneously and energetically making his works unique and impossible to
            imitate. His works are multi-layered, which affects the texture of the work and the
            final color effect.
          </p>
        </div>
      </div>
      <div className={classes['second-section__img']}>
        <img src={img} alt="Dan Gray Artist Denver"></img>
      </div>
    </section>
  );
};

export default SecondSection;
