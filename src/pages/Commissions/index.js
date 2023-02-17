import classes from './index.module.css';
import H1Header from '../../components/UI/H1Header';
import Contact from '../../components/UI/Contact';
import imgPlaceholder from '../../assets/imgs/dog.jpg';

const Commissions = () => {
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
          <div>
            <img src={imgPlaceholder}></img>
          </div>
          <div>
            <img src={imgPlaceholder}></img>
          </div>
          <div>
            <img src={imgPlaceholder}></img>
          </div>
          <div>
            <img src={imgPlaceholder}></img>
          </div>
          <div>
            <img src={imgPlaceholder}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commissions;
