import classes from './index.module.css';
import H1Header from '../../components/UI/H1Header';
import Contact from '../../components/UI/Contact';

const Commissions = () => {
  return (
    <section className={classes['commissions']}>
      <H1Header title="COMMISSIONS" />
      <p>
        Are you excited about having your pet portrait?<br></br> Contact Daniel and discuss the work
        details.
      </p>
      <Contact title="Contact" />
    </section>
  );
};

export default Commissions;
