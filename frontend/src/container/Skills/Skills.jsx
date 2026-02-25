import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'react-tooltip/dist/react-tooltip.css'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Tooltip } from 'react-tooltip';
import './Skills.scss';
import { workExperience } from '../../../../backend/schemaTypes/workExperience';


const Skills = () => {
  const [experience, setExperience] = useState('');
  const [skills, setSkill] = useState([]);

  useEffect(() => {
    const query = '*[_type == "workExperience"][0].file.asset->url';
    const skillsQuery = '*[_type == "skills"]';
  
    client.fetch(query)
      .then((data) => {
        setExperience(data);
    });
  
    client.fetch(skillsQuery)
      .then((data) => {
        setSkill(data);
    });
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = experience;
    link.download = "Rama-Kaorma.pdf";
    link.click();
  };

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill) => (
            <motion.div
              whileInView={{opacity: [0,1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp app__exp-resume' key={workExperience}>
            <button onClick={downloadResume} className='app__exp-resume'>
              Download Resume
            </button>
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
);