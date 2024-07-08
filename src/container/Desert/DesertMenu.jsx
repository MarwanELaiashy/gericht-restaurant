import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import "./DesertMenu.css";

const DesertMenu = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Start animation when 20% of the component is in view
  });

  return (
    <div className='app__desertMenu flex__center section__padding' id='menu' ref={ref}>
      <motion.div
        className='app__desertMenu-title'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <SubHeading title="Desserts that fits your palette"/>
        <h1 className="headtext__cormorant">Today&apos;s Highlight</h1>
      </motion.div>

      <div className='app__desertMenu-menu'>
        <motion.div
          className='app__desertMenu-menu_food flex__center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className='app__desertMenu-menu_heading'>Desserts</p>
          <div className="app__desertMenu_menu_items">
            {data.deserts.map((desert, index) => (
              <MenuItem key={desert.title + index} title={desert.title} price={desert.price} tags={desert.tags} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className='app__desertMenu-menu_img'
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img src={images.desserts} alt='dessert-image'/>
          <img src={images.cupCake} alt='cupcake-image'/>
        </motion.div>

        <motion.div
          className='app__desertMenu-menu_juices flex__center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className='app__desertMenu-menu_heading'>Hot Drinks</p>
          <div className="app__desertMenu_menu_items">
            {data.hotDrinks.map((drink, index) => (
              <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags} />
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

export default DesertMenu;
