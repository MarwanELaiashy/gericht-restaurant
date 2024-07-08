import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the component is in view
  });

  return (
    <div className='app__bg app__wrapper section__padding' id='contact' ref={ref}>
      <motion.div
        className='app__wrapper_info'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <SubHeading title="Contact"/>
        <h1 className='headtext__cormorant' style={{ marginBottom: "3rem" }}>Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className='p__opensans'>Mon - Fri: 10:00 AM - 02:00 AM</p>
          <p className='p__opensans'>Sat - Sun: 10:00 AM - 03:00 AM</p>
        </div>
        <motion.button
          type='button'
          className='custom__button'
          style={{ marginTop: "2rem" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Visit Us
        </motion.button>
      </motion.div>

      <motion.div
        className='app__wrapper_img'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img src={images.findus} alt='findus_image'/>
      </motion.div>
    </div>
  );
};

export default FindUs;
