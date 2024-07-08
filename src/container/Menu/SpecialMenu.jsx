import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the component is in view
  });

  return (
    <div className='app__specialMenu flex__center section__padding' id='menu' ref={ref}>
      <motion.div
        className='app__specialMenu-title'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <SubHeading title="Menu that fits your palette"/>
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </motion.div>

      <div className='app__specialMenu-menu'>
        <motion.div
          className='app__specialMenu-menu_food flex__center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className='app__specialMenu-menu_heading'>Foods</p>
          <div className="app__specialMenu_menu_items">
            {data.foods.map((food, index) => (
              <MenuItem key={food.title + index} title={food.title} price={food.price} tags={food.tags} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className='app__specialMenu-menu_img'
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img src={images.menu} alt='menu-image'/>
        </motion.div>

        <motion.div
          className='app__specialMenu-menu_juices flex__center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className='app__specialMenu-menu_heading'>Fresh Juices</p>
          <div className="app__specialMenu_menu_items">
            {data.freshJuices.map((juice, index) => (
              <MenuItem key={juice.title + index} title={juice.title} price={juice.price} tags={juice.tags} />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ marginTop: 15 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      >
        <button type='button' className='custom__button'>View More</button>
      </motion.div>
    </div>
  );
};

export default SpecialMenu;
