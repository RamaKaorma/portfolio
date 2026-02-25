import React, { useState } from 'react'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { motion } from 'framer-motion';
import './Graphics.scss';

const Graphics = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <h2 className='head-text'>Graphics Credit</h2>
      <div className='app__graphics app__flex'>
          <motion.div
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, type:'tween'}}
              className='app__graphics-item'
              key={index}
          >
            <p className='bold-text'>I would like to acknowledge the following creators whose work has been used in this portfolio.</p>
            <p>All graphic items have been sourced through Canva</p>
            <ul>
              <li><a href="https://www.canva.com/p/sketchify/?msockid=25576e87817f670008517c00806f66b6" target='_blank'>@sketchify</a></li>
              <li><a href="https://www.canva.com/p/sparklestroke/?msockid=25576e87817f670008517c00806f66b6" target='_blank'>@sparklestroke</a></li>
              <li><a href="https://www.canva.com/p/sketchifyedu/?msockid=25576e87817f670008517c00806f66b6" target='_blank'>@sketchifyedu</a></li>
            </ul>
          </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Graphics, 'app__graphics'),
  'graphics',
  'app__whitebg'
);