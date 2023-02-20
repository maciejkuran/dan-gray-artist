import classes from './index.module.css';
import H1Header from '../../components/UI/H1Header';

const PrivacyPolicy = () => {
  return (
    <section className={classes['privacy-policy']}>
      <H1Header title='Privacy Policy' />
      <div className={classes['privacy-policy__content']}>
        <p>
          This website is hosted on Netflify's server. The website features
          artworks by artist Daniel Gray. The site is not an online store and is
          intended to exclusively showcase artworks.
        </p>
        <p>
          This website does not have contact forms, nor does it collect or
          process user data in any way. Contact with the artist Daniel Gray is
          made voluntarily by sending an email from an external email client.
        </p>
        <p>
          This website does not use analytical portals that track site traffic
          like Google Analytics. For questions, please send inquiries to
          <a href='mailto:grayd2003@yahoo.com'> grayd2003@yahoo.com</a>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
