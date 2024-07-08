import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the component is in view
  });

  return (
    <div className='app__bg app__wrapper section__padding' ref={ref}>
      <motion.div
        className='app__wrapper_img app__wrapper_img-reverse'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img src={images.chef} alt='chef-image'/>
      </motion.div>

      <motion.div
        className='app__wrapper_info'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <SubHeading title="Chef's word"/>
        <h1 className='headtext__cormorant'>What we believe in</h1>

        <motion.div
          className='app__chef-content'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote-image'/>
            <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <p className='p__opensans'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </motion.div>

        <motion.div
          className='app__chef-sign'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt='sign-image'/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Chef;
