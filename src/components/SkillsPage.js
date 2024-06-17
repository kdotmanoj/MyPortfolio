import React from 'react';
import './SkillsPage.css';
import SkillTile from './SkillTile';
import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import jsImage from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import bashImage from '../assets/bash.png';

const SkillsPage = () => {
  const skills = [
    { name: 'HTML', imagePath: htmlImage },
    { name: 'CSS', imagePath: cssImage },
    { name: 'JavaScript', imagePath: jsImage },
    { name: 'React', imagePath: reactImage },
    { name: 'Bash', imagePath: bashImage },
  ];

  return (
      <>
      <section id="skills" className="section skills-section">
      <h1 className="section-heading">Skills</h1>
          <div className="skill-list">
              {skills.map((skill, index) => (
                  <SkillTile key={index} skill={skill} />
              ))}
          </div>
      </section>
      </>
  );
};

export default SkillsPage;
