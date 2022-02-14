import React, { useEffect } from 'react';

import { IoLogoTwitter } from 'react-icons/io'
import { ImFacebook } from 'react-icons/im'
import { ImLinkedin2 } from 'react-icons/im'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getFooter} from '../../actions/appAction';


const names =[ ['lara','basema'], ['rawan'], 'ziyad', 'hani', 'ghada','hala']

function Footer({ footerInfo,  getFooter }) {
    
    useEffect(() => {
        getFooter(); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        if (!Array.isArray(footerInfo) || footerInfo.length <= 0) {
            return null;
          }
    return (
    
        <div className='footer__container'>
            <div className="footer__grid">
                
                    <img src={footerInfo[0].img} alt="" >
                    </img>
             
                <div className='footer__info'>
                    {footerInfo[1].info.map((info, index) => {
                        //  if (index >= 12) return null;
                       
                      return(  <div
                            key={index + 1}
                        >
                            <a className="footer__item">{info[0]}</a>
                            <a className="footer__item">{info[1]}</a>
                            <a className="footer__item">{info[2]}</a>
                      </div>)
                  
                //  ["<ImFacebook/>","<IoLogoTwitter/>","<i className='fa-brands fa-500px'></i>"]
                    })}   </div>
            </div>
                <p className="footer__footer" > © 2019 Snubes GmbH All Rights Reserved.</p>
        </div>
    );
}
Footer.propTypes = {
    getFooter: PropTypes.func.isRequired,
    footerInfo:PropTypes.array.isRequired,
 }

 const mapStateToProps = state => ({ 
     footerInfo: state.appData.footer
 })

export default connect(mapStateToProps ,{  getFooter})  (Footer);