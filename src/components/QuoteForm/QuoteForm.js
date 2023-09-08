import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './QuoteForm.css';
import { useTheme } from '../../themes/ThemeContext';
import ModeToggle from '../ModeToggle/ModeToggle';

const QuoteForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfPages, setNumberOfPages] = useState('1'); // Default value set to '1'
  const [typeOfPage, setTypeOfPage] = useState('Portfolio'); // Default value set to 'Portfolio'
  const [logoDesign, setLogoDesign] = useState(false);
  const [pageDesign, setPageDesign] = useState(false);
  const [ideaStage, setIdeaStage] = useState('Just an Idea'); // Default value set to 'Just an idea'
  const [brandingServices, setBrandingServices] = useState(false);
  const [details, setDetails] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = event => {
    event.preventDefault();

    emailjs.init('T4558Y3IxSEuZqC0l');

    const templateParams = {
      name,
      email,
      numberOfPages,
      typeOfPage,
      ideaStage,
      logoDesign: logoDesign ? 'Yes' : 'No',
      pageDesign: pageDesign ? 'Yes' : 'No',
      brandingServices: brandingServices ? 'Yes' : 'No',
      details,
    };

    emailjs.send('service_0rrlbqp', 'template_p0rjkb2', templateParams).then(
      function () {
        setShowSuccessMessage(true);
        setName('');
        setEmail('');
        setNumberOfPages('1');
        setTypeOfPage('Portfolio');
        setIdeaStage('Just an Idea');
        setLogoDesign(false);
        setPageDesign(false);
        setBrandingServices(false);
        setDetails('');
      },
      function (error) {
        console.error('Email send error:', error);
      },
    );
  };

  return (
    <div className="quote-form-container" id="quote-form-container">
      <div className="lptoggle-container">
        <ModeToggle />
      </div>
      <h4>Get a Free Quote</h4>
      <form onSubmit={handleSubmit} className="quote-form" id="quote-form">
        <div className="info-row">
          <div className="quote-form-row">
            <label htmlFor="name"> Your Name</label>
            <input
              type="text"
              id="name"
              className={`quote-grey ${theme}`}
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="quote-form-row">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className={`quote-grey ${theme}`}
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={`drop-row ${theme}`}>
          <div className="quote-form-row">
            <label htmlFor="typeOfPage">Type of Page or Project</label>
            <select
              id="typeOfPage"
              className={`quote-grey ${theme}`}
              name="typeOfPage"
              value={typeOfPage}
              onChange={e => setTypeOfPage(e.target.value)}
            >
              <option value="Portfolio">Portfolio</option>
              <option value="Business">Business</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Informational">Informational</option>
              <option value="Personal">Personal</option>
              <option value="Software">Software Program / CLI</option>
              <option value="Script">Custom Script</option>
              <option value="Proof of Concept (PoC)">
                Proof of Concept (PoC)
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="quote-form-row">
            <label htmlFor="ideaStage">How Far Along are You?</label>
            <select
              id="ideaStage"
              className={`quote-grey ${theme}`}
              name="ideaStage"
              value={ideaStage}
              onChange={e => setIdeaStage(e.target.value)}
            >
              <option value="Just an Idea">Just an Idea</option>
              <option value="A Strong Vision">A Strong Vision</option>
              <option value="Just Need Development">
                Just Need Development
              </option>
            </select>
          </div>
        </div>
        <div className={`check-row ${theme}`}>
          <div className="small-boxes">
            <div className="quote-form-row small-boxes2">
              <label htmlFor="numberOfPages">Number of Pages</label>
              <select
                id="numberOfPages"
                className={`quote-grey ${theme}`}
                name="numberOfPages"
                value={numberOfPages}
                onChange={e => setNumberOfPages(e.target.value)}
              >
                <option value="N/A">N/A</option>
                {Array.from({ length: 20 }, (_, index) => index + 1).map(
                  pages => (
                    <option key={pages} value={pages}>
                      {pages === 20 ? `${pages}+` : pages}
                    </option>
                  ),
                )}
              </select>
            </div>
            <div className="quote-form-row small-boxes2">
              <label htmlFor="logoDesign">Logo Design?</label>
              <select
                id="logoDesign"
                className={`quote-grey ${theme}`}
                name="logoDesign"
                value={logoDesign ? 'Yes' : 'No'}
                onChange={e => setLogoDesign(e.target.value === 'Yes')}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="small-boxes">
            <div className="quote-form-row small-boxes2">
              <label htmlFor="pageDesign">Page Design?</label>
              <select
                id="pageDesign"
                className={`quote-grey ${theme}`}
                name="pageDesign"
                value={pageDesign ? 'Yes' : 'No'}
                onChange={e => setPageDesign(e.target.value === 'Yes')}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="quote-form-row small-boxes2">
              <label htmlFor="brandingServices">Branding Services?</label>
              <select
                id="brandingServices"
                className={`quote-grey ${theme}`}
                name="brandingServices"
                value={brandingServices ? 'Yes' : 'No'}
                onChange={e => setBrandingServices(e.target.value === 'Yes')}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
        <div className="quote-form-row details-row">
          <label htmlFor="details">Details</label>
          <textarea
            className={`quote-grey ${theme} quote-non-resizable details`}
            name="details"
            value={details}
            onChange={e => setDetails(e.target.value)}
            rows="4"
            maxLength="1000"
            placeholder="Tell us what you're thinking!"
          ></textarea>
        </div>
        <br />
        <div className="submit-container">
          <button type="submit" form="quote-form">
            Submit
          </button>
        </div>
        {showSuccessMessage && (
          <div className="quote-success-container">
            <div className="success-message">
              <p>Message Sent Successfully!</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuoteForm;
