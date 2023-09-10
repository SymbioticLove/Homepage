import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SkillBubbles.css';

const SkillBubbles = ({ skillsData }) => {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  const handleBubbleClick = index => {
    setExpandedSkill(index === expandedSkill ? null : index);
    setShowDescription(false); // Hide description before changing skills

    if (index !== expandedSkill) {
      // Delay showing the description after 0.5 seconds
      setTimeout(() => {
        setShowDescription(true);
      }, 500);
    }
  };

  return (
    <div>
      <h1 className="sb-main-title">My Skills</h1>
      <p className="sb-main-subtitle">Click/Tap to Expand!</p>
      <div className="skill-bubbles-container">
        {skillsData.map((skill, index) => (
          <div
            className={`skill-bubble ${
              index === expandedSkill ? 'expanded' : ''
            }`}
            key={index}
            onClick={() => handleBubbleClick(index)}
            style={
              index === expandedSkill
                ? { backgroundImage: `url(${skill.image})` }
                : null
            } // Apply background image only when expanded
          >
            <div className="skill-title">{skill.title}</div>
            {index === expandedSkill && (
              <div
                className="skill-description"
                style={{
                  opacity: showDescription ? 1 : 0, // Use opacity to hide/show
                  visibility: showDescription ? 'visible' : 'hidden', // Hide/show but keep the space
                }}
              >
                {skill.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

SkillBubbles.propTypes = {
  skillsData: PropTypes.array.isRequired,
};

export default SkillBubbles;
