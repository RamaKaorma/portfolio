import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'react-tooltip/dist/react-tooltip.css'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Tooltip } from 'react-tooltip';
import './Awards.scss';

const Awards = () => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const query = '*[_type == "awards"]';

    client.fetch(query)
      .then((data) => {
        setAwards(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Awards & Nominations</h2>
      <div className='app__awards app__flex'>
        {awards?.map((award, index) => (
          <div className='app__awards-item app__flex' key={index}>
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5, type: 'tween', delayChildren: 0.5}}
              key={award._id}
              className='app__flex'
            >
              <img src={urlFor(award.imgUrl)} alt={award.issuer}/>
              <div className='app__awards-content'>
                <h2 className='bold-text'>{award.name}</h2>
                <p className='p-text'>{award.issuer}</p>
                <p className='p-text'>{award.year}</p>
              </div>
              
            </motion.div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
    MotionWrap(Awards, 'app__awards'), 
    'awards',
    'app__whitebg'
);
