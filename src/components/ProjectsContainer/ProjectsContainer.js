import React, { useState } from 'react';
import './ProjectsContainer.css';
import { useSelector } from 'react-redux';
import { useTheme } from '../../themes/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const ProjectsContainer = () => {
  const projectsData = useSelector(state => state.about.projects);
  const { theme } = useTheme(); // Call the useTheme hook to get the theme
  const link = 'https://placehold.co/800x400';

  // Define a state variable to track the currently expanded project
  const [expandedProject, setExpandedProject] = useState(null);

  // Define a function to handle click events on project titles
  const handleProjectClick = project => {
    // Toggle the expanded state of the clicked project
    if (expandedProject === project.title) {
      setExpandedProject(null); // Collapse the project if it's already expanded
    } else {
      setExpandedProject(project.title); // Expand the project
    }
  };

  // Define a function to render a single project section
  const renderProjectSection = project => (
    <div className={`project-section ${theme}`} key={project.title}>
      <div
        className="project-title-container"
        onClick={() => handleProjectClick(project)}
      >
        {/* Map over project logos and render images */}
        {project.logos &&
          project.logos.map((logo, index) => (
            <img src={logo} alt={`Logo ${index}`} key={`logo-${index}`} />
          ))}
        <h3>{project.title}</h3>
        <span
          className={`caret-icon2 ${
            expandedProject === project.title ? 'expanded' : ''
          }`}
        >
          <FontAwesomeIcon
            icon={faCaretDown}
            style={{
              transform: `rotate(${
                expandedProject === project.title ? '180deg' : '0deg'
              })`,
              transition: 'transform 0.2s ease-in-out',
            }}
          />
        </span>
      </div>
      <div
        className={`project-content ${
          expandedProject === project.title ? 'expanded' : ''
        }`}
      >
        <img src={link} alt={project.title} />
        <p>{project.content}</p>
        <a href={project.link}>Visit Repository</a>
      </div>
    </div>
  );

  return (
    <div className="projects-wrapper">
      <h2 className={`title ${theme}`}>Some of Our Projects</h2>
      <div className={`projects-container ${theme}`}>
        <div className="outer-project-column">
          {projectsData.map(project => (
            <div key={project.title} className="project-column">
              {renderProjectSection(project)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
