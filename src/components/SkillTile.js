import React from 'react';
import './SkillTile.css';

const SkillTile = ({ skill }) => {
  const { name, imagePath } = skill;

  return (
    <div className="skill-tile">
      <img src={imagePath} alt={name} className="skill-image" />
      <h3>{name}</h3>
    </div>
  );
};

export default SkillTile;
