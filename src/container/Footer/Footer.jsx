import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the component is in view
  });

  return (
    <motion.div 
      className='app__footer section__padding' 
      id='login' 
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: footerInView ? 1 : 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>
        <motion.div 
          className='app__footer-links_contact'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </motion.div>

        <motion.div 
          className='app__footer-links_logo'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img src={images.gericht} alt='footer-logo' />
          <p className="p__opensans">
            "The best way to find yourself is to lose yourself in the service of others."
          </p>
          <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt='spoon-img' />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </motion.div>

        <motion.div 
          className='app__footer-links_work'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: footerInView ? 1 : 0, y: footerInView ? 0 : 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </motion.div>
      </div>

      <motion.div 
        className='footer__copyright'
        initial={{ opacity: 0 }}
        animate={{ opacity: footerInView ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      >
        <p className="p__opensans">2024 Gericht. All Rights reserved.</p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
