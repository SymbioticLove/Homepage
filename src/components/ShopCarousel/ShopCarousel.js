import React from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ShopCarousel.css';

const ShopCarousel = () => {
  const shopImages = useSelector(
    state => state.about.accordion.find(item => item.title === 'Shop').image,
  );

  return (
    <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
      {shopImages.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Shop Item ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ShopCarousel;
