import React from 'react';
import './ProjectsContainer.css';
import { useSelector } from 'react-redux';
import { useTheme } from '../../themes/ThemeContext';

const ProjectsContainer = () => {
  const projectsData = useSelector(state => state.about.projects);
  const theme = useTheme(); // Call the useTheme hook to get the theme

  // Define a function to render a single project section
  const renderProjectSection = project => (
    <div className={`project-section ${theme}`} key={project.title}>
      <div>
        <img src={project.image} alt={project.title} />
      </div>
      <div>
        <h2>{project.title}</h2>
        <p>{project.content}</p>
        <a href={project.link}>{project.link}</a>
      </div>
    </div>
  );

  // Map through the projects and render them in rows of 2
  const renderProjectRows = () => {
    const projectRows = [];
    for (let i = 0; i < projectsData.length; i += 2) {
      const projectRow = (
        <div className="project-row" key={`row-${i}`}>
          {renderProjectSection(projectsData[i])}
          {i + 1 < projectsData.length &&
            renderProjectSection(projectsData[i + 1])}
        </div>
      );
      projectRows.push(projectRow);
    }
    return projectRows;
  };

  return (
    <div className={`projects-container ${theme}`}>{renderProjectRows()}</div>
  );
};

export default ProjectsContainer;
