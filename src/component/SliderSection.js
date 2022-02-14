import React, { useState, useEffect } from 'react';

import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getSlidesInfo } from '../actions/appAction';

const SliderSection = ({ slides, getSlidesInfo }) => {
  


useEffect(() => {
  getSlidesInfo  ()

    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  const [current, setCurrent] = useState(0); 
  const [circles, setCercls] = useState( ['','','']);


  const length = slides.length;
    

    const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };   
    
    if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

    // onClick={prevSlide}
    // 

  return (
    <div className='slider'>
      <IoIosArrowBack className='left-arrow arrow' onClick={prevSlide} />
  <div className="slide">
      {slides.map((slide, index) => {
        return (
          <div key={index} >
                {index === current && (
                    <>

                <img src={slide.logo} alt="" />
                    <p>{slide.body}</p>
                      <h6>{slide.signeture}</h6><span>{slide.name}</span>
                        <div className="loader">
                  {circles.map((circle, index) => 
                   
                   index === current ?<div key={index} className="circle circle__active"></div> : <div key={index} className="circle"></div> 
                     
                  )}
                
     
      </div>
                    </>
            )}
            
          </div> );
 
      })}
 </div>
          <IoIosArrowForward className='right-arrow arrow' onClick={nextSlide} />
    </div>
  );
};
SliderSection.propTypes = {
  getSlidesInfo : PropTypes.func.isRequired,
    slides:PropTypes.array.isRequired,
 }
 
 const mapStateToProps = state => ({
     slides: state.appData.companies
     
 
 })
export default connect(mapStateToProps ,{getSlidesInfo }) (SliderSection);