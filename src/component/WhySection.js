import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getWhy} from '../actions/appAction';


function WhySection({ why, getWhy,   }) {
    useEffect(() => {
       
        getWhy()
       
       
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (!Array.isArray(why) || why.length <= 0) {
        return null;
      }

    
    return (
        <div className="why__background">
        <div className='why__container'>
            <h3>Why Snubes?</h3>
            {why.map((why, index) => {
            return (
            <div className="why__Item"
            key={index + 1}
            >
                     
                <div className="why__text">
                    <h5 className="whyItem__title">
                    
                        {why.title}
                    </h5>
                    <p className="whyItem__body">
                        {why.body} 
                    </p>
                </div>
            </div>
             );
             })} 
            </div>
            </div>
    );

}
WhySection.propTypes = {
    getWhy: PropTypes.func.isRequired,
 
    why: PropTypes.array.isRequired,
   
 }
 
 const mapStateToProps = state => ({
     why: state.appData.resones,
  
 
 })

export default connect(mapStateToProps ,{getWhy }) (WhySection);