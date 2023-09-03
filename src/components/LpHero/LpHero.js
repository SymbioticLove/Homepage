import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import ModeToggle from '../ModeToggle/ModeToggle';
import ContactForm from '../ContactForm/ContactForm';
import ShopCarousel from '../ShopCarousel/ShopCarousel';
import './LpHero.css';
import Header from '../Header/Header';

const LpHero = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionData = useSelector(state => state.about.accordion);

  const handleAccordionClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`lphero-container`}>
      <div className="lptoggle-container">
        <ModeToggle />
      </div>
      <Header />
      {accordionData.map((item, index) => (
        <div
          key={item.title}
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          id="width"
        >
          <button
            className="accordion-title"
            onClick={() => handleAccordionClick(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`content-${index}`}
            id="underline"
          >
            {item.title}{' '}
            <span className="caret-icon">
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{
                  transform: `rotate(${
                    activeIndex === index ? '180deg' : '0deg'
                  })`,
                  transition: 'transform 0.2s ease-in-out',
                }}
              />
            </span>
          </button>
          <div
            id={`content-${index}`}
            className="accordion-content"
            style={{
              maxHeight: activeIndex === index ? '900px' : '0',
              overflow: 'hidden',
              transition: 'max-height 1s ease-in-out',
            }}
            aria-hidden={activeIndex !== index}
          >
            {item.title === 'Contact' && (
              <div>
                {item.contacts.map((contact, contactIndex) => (
                  <div key={contactIndex} className="contact-person">
                    <p>
                      {contact.name}:{' '}
                      <a
                        href={`mailto:${contact.email}`}
                        className="contact-links"
                      >
                        {contact.email}
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            )}
            {item.title === 'Shop' && (
              <div>
                <p className="accordion-content-2">{item.content}</p>
                <ShopCarousel />
              </div>
            )}
            {item.title === 'About' && (
              <div>
                <p className={`accordion-content-${index}`}>{item.content}</p>
                <div className="about-images-container">
                  {item.image.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={`About Image ${imageIndex}`}
                      className={`about-image-${index}-${imageIndex}`}
                    />
                  ))}
                </div>
              </div>
            )}
            {item.title !== 'Contact' &&
              item.title !== 'Shop' &&
              item.title !== 'About' && (
                <div>
                  <p className={`accordion-content-${index}`}>{item.content}</p>
                  {item.title !== 'Web Services' && (
                    <img
                      src={item.image}
                      alt="Section Image"
                      className={`section-image-${index}`}
                    />
                  )}
                </div>
              )}
          </div>
        </div>
      ))}
      <div className="contact-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default LpHero;
