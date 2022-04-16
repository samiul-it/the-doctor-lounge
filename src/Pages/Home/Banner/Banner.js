import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";
import banner2 from '../../../Resources/Images/banner1.png'
import banner1 from '../../../Resources/Images/banner2.png'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block h-50 w-100  "
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;