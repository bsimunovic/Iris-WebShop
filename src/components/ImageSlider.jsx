import React, { useState, useEffect } from 'react';
import { SliderData } from './globalValues';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = SliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);


  return (
    <div className='flex justify-center items-center relative h-[80vh]'>
      <FaArrowAltCircleLeft className='absolute cursor-pointer text-4xl top-[50%] left-[8%] z-[10] text-[#606060]/60' onClick={prevSlide} />
      <FaArrowAltCircleRight className='absolute cursor-pointer text-4xl top-[50%] right-[8%] z-[10] text-[#606060]/60' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div>
            {index === currentSlide && (
              <img src={slide.image} className='w-[1300px] h-[600px] border-r-[10px]' />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;