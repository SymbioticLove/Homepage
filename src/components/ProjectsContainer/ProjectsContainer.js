import React, { useState } from 'react';
import './ProjectsContainer.css';
import { useSelector } from 'react-redux';
import { useTheme } from '../../themes/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const ProjectsContainer = () => {
  const projectsData = useSelector(state => state.about.projects);
  const { theme } = useTheme(); // Call the useTheme hook to get the theme

  // Define a state variable to track the currently expanded project
  const [expandedProject, setExpandedProject] = useState(null);

  // Define state variables for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define a function to handle click events on project titles
  const handleProjectClick = project => {
    if (expandedProject === project.title) {
      setExpandedProject(null);
      setSelectedImages([]); // Clear selected images
    } else {
      setExpandedProject(project.title);
      if (project.images && project.images.length > 0) {
        setSelectedImages(project.images);
        setCurrentImageIndex(0); // Start with the first image
      }
    }
  };

  // Define a function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Render a single project section
  const renderProjectSection = project => (
    <div className={`project-section ${theme}`} key={project.title}>
      <div
        className="project-title-container"
        onClick={() => handleProjectClick(project)}
      >
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
        <div className="text-and-image">
          {project.images && project.images.length > 0 && (
            // Render an image and the <h5> element
            <div className="img-and-enlarge">
              <h5>Click/Tap Image to Enlarge + See More</h5>
              <img
                src={project.images[0]} // Display the first image as the initial image
                alt={project.title}
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          )}
          <p>{project.content}</p>
        </div>
        {[
          'Galactic Greenery',
          'Remote Signing Services',
          "Matthew Ford's Portfolio",
        ].includes(project.title) ? (
          <button onClick={() => (window.location.href = project.link)}>
            Visit Site
          </button>
        ) : (
          <a href={project.link}>Visit Repository</a>
        )}
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

      {/* Modal for carousel images */}
      {isModalOpen && (
        <div className="modal">
          <img src={selectedImages[currentImageIndex]} alt="Modal" />

          {/* Display navigation buttons for the carousel only when there are multiple images */}
          {selectedImages.length > 1 ? (
            <div className="carousel-nav">
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (currentImageIndex - 1 + selectedImages.length) %
                      selectedImages.length,
                  )
                }
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentImageIndex(
                    (currentImageIndex + 1) % selectedImages.length,
                  )
                }
              >
                Next
              </button>
              <button onClick={closeModal}>Close</button>
            </div>
          ) : (
            // Only "Close" button when there's only one image
            <div className="carousel-nav">
              <button onClick={closeModal}>Close</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectsContainer;
