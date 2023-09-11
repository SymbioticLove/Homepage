import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../themes/ThemeContext';

const AboutAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`accordion-item3 ${theme} ${isOpen ? 'active' : ''}`}>
        <button
          className="accordion-title3"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`content-${title}`}
        >
          {title}{' '}
          <span className="caret-icon3">
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{
                transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
                transition: 'transform 0.2s ease-in-out',
              }}
            />
          </span>
        </button>
        <div
          id={`content-${title}`}
          className="accordion-content3"
          style={{
            maxHeight: isOpen ? '900px' : '0',
            overflow: 'hidden',
            transition: 'max-height 1s ease-in-out',
          }}
          aria-hidden={!isOpen}
        >
          <p className={`about-paragraph3 ${theme}`}>{content}</p>
        </div>
      </div>
      <div>
        <a
          href="https://github.com/SymbioticLove"
          target="_blank"
          rel="noopener noreferrer"
          alt="GitHub"
        >
          <button>My GitHub</button>
        </a>
        <a
          href="https://symbioticlove.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          alt="GitHub"
        >
          <button>My Portfolio</button>
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-ford-2a0573272/"
          target="_blank"
          rel="noopener noreferrer"
          alt="GitHub"
        >
          <button>Connect on LinkedIn</button>
        </a>
      </div>
    </div>
  );
};

AboutAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default AboutAccordion;
