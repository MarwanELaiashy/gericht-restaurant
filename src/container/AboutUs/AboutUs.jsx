import React from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutUs.css';

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the component is in view
  });

  return (
    <div className='app__aboutus flex__center section__padding app__bg' id='about' ref={ref}>
      <div className='app__aboutus-overlay flex__center'>
        <motion.img 
          src={images.G} 
          alt='G-overlay'
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <div className='app__aboutus-content flex__center'>
        <motion.div
          className='app__aboutus-content_about'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about-spoon' className='spoon__img'/>
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </p>
          <motion.button
            type='button'
            className='custom__button'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Know More
          </motion.button>
        </motion.div>

        <motion.div
          className='app__aboutus-content_knife flex__center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <img src={images.knife} alt='about-knife' />
        </motion.div>

        <motion.div
          className='app__aboutus-content_history'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about-spoon' className='spoon__img'/>
          <p className='p__opensans'>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
          </p>
          <motion.button
            type='button'
            className='custom__button'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Know More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
