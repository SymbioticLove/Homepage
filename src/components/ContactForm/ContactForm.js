import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import { useTheme } from '../../themes/ThemeContext';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = event => {
    event.preventDefault();

    emailjs.init('T4558Y3IxSEuZqC0l');

    const templateParams = {
      name,
      email,
      comment,
    };

    emailjs.send('service_0rrlbqp', 'template_plfpr2h', templateParams).then(
      function () {
        setShowSuccessMessage(true);
        setName('');
        setEmail('');
        setComment('');
      },
      function (error) {
        console.error('Email send error:', error);
      },
    );
  };

  return (
    <div className="form-container" id="form-container">
      <h4>Sign up for Our Email List</h4>
      <p>You&apos;ll get free test products, coupons, goodies, and more!</p>
      <form onSubmit={handleSubmit} className="form" id="contact-form">
        <div className="form-row">
          <label htmlFor="name">Name (required)</label>
          <input
            type="text"
            id="name"
            className={`grey ${theme}`}
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="form-row">
          <label htmlFor="email">Email (required)</label>
          <input
            type="email"
            id="email"
            className={`grey ${theme}`}
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="form-row">
          <label htmlFor="comment">Comment (optional)</label>
          <textarea
            className={`grey ${theme} non-resizable comment`}
            name="comment"
            value={comment}
            onChange={e => setComment(e.target.value)}
            rows="4"
            maxLength="1000"
            placeholder="Do you have anything to add?"
          ></textarea>
        </div>
        <br />
        <div className="submit-container">
          <button type="submit" form="contact-form">
            Submit
          </button>
        </div>
        {showSuccessMessage && (
          <div className="success-container">
            <div className="success-message">
              <p>Message Sent Successfully!</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
