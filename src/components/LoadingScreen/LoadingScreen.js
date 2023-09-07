import React, { useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  useEffect(() => {
    const image = document.querySelector('.loading-image');

    if (image) {
      const rotateImage = () => {
        image.style.transition = 'transform 0.5s ease-in-out';
        image.style.transform = 'rotate(360deg)';

        setTimeout(() => {
          image.style.transition = 'none';
          image.style.transform = 'rotate(0deg)';
        }, 500); // Wait for 0.5 seconds before resetting the rotation
      };

      setInterval(rotateImage, 2000); // Rotate every 2 seconds
    }
  }, []);

  return (
    <div className="loading-screen">
      <img
        src="https://symbiotic.love/logo11.svg"
        alt="Loading"
        className="loading-image"
      />
      <h1>We&apos;re getting everything ready!</h1>
      <p>Give us just a moment...</p>
    </div>
  );
};

export default LoadingScreen;
