import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Typing from './components/Typing';
import ProgressBar from './components/ProgressBar';
import manojImage from './assets/manoj.jpg';
import ProjectTile from './components/ProjectTile';
import SkillsPage from './components/SkillsPage'; 
import { fetchGitHubProjects } from './utils/GitHubUtil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [projects, setProjects] = useState([]);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scroll = (totalScroll / windowHeight) * 100;

    setScrollProgress(scroll);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetchGitHubProjects().then(data => {
      const selectedRepositories = data.filter(repo => (
        repo.name === 'Quiz-Game' || repo.name === 'Finance-Tracker'
      ));
      setProjects(selectedRepositories);
    });
  }, []);

  return (
    <div className="App">
      <ProgressBar progress={scrollProgress} />
      <NavBar scrollToSection={scrollToSection} />
      <section id="home" className="section home-section">
        <div className="home-content">
          <div className="left">
            <img src={manojImage} alt="Manoj" className="manoj-image" />
          </div>
          <div className="right">
            <header className="App-header">
              <h1>HI I AM MANOJ</h1>
              <Typing
                text={[
                  'Software Developer.',
                  'AI/ML Enthusiast.',
                  'Full Stack Developer.'
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                duration={1000}
              />
              <div className="social-icons">
                <a href='https://github.com/kdotmanoj'> <FontAwesomeIcon icon={faGithub} size='3x' color='white'/></a>
                <a href='https://www.linkedin.com/in/k-manoj-17a494281/'>
                <FontAwesomeIcon icon={faLinkedin} size='3x' color='white'/></a>
              </div>
            </header>
          </div>
        </div>
      </section>
      <section id="about" className="section about-section">
        <div className="about-container">
          <div className="about-content">
            <h1>About Me</h1>
              <p>
                Hello! I'm <strong>K Manoj Krishna</strong>, a passionate tech and web development enthusiast with a strong drive to create innovative solutions.
              </p>
              <p>
                I have a deep interest in exploring various aspects of software development, particularly in areas like full-stack web development, AI/ML, and cybersecurity.
              </p>
              <p>
                Currently, I am pursuing my studies in Computer Science, aiming to deepen my understanding of fundamental principles and cutting-edge technologies.
              </p>
          </div>
        </div>
      </section>
      <section id="projects" className="section projects-section">
        <h1 className="section-heading">Projects</h1>
        <div className="project-list">
          {projects.map(project => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </section>
      <SkillsPage />
    </div>
  );
}

export default App;
