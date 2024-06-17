import React from 'react';
import './ProjectTile.css'; 
import quizImage from '../assets/quiz-game.jpg'; 
import financeImage from '../assets/finance-tracker.jpg'; 

const ProjectTile = ({ project }) => {
  const { name, description, html_url } = project;
  let imagePath;

  if (name === 'Quiz-Game') {
    imagePath = quizImage;
  } else if (name === 'Finance-Tracker') {
    imagePath = financeImage;
  } else {
    imagePath = ''; 
  }

  return (
    <div className="project-tile">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="project-details">
        <img src={imagePath} alt={name} className="project-image" />
        <div className="project-links">
          <a href={html_url} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
