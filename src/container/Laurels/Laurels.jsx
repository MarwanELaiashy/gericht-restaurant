import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({award : {imgUrl, title, subtitle}}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt='award-image'/>
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color : '#DCCA87'}}>{title}</p>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the component is in view
  });

  return (
    <div className='app__bg app__wrapper section__padding' id='awards' ref={ref}>
      <motion.div
        className='app__wrapper_info'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <SubHeading title="Awards & recognition"/>
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <motion.div
          className='app__laurels_awards'
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
        </motion.div>
      </motion.div>

      <motion.div
        className='app__wrapper_img'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img src={images.laurels} alt='laurels-image'/>
      </motion.div>
    </div>
  );
};

export default Laurels;
