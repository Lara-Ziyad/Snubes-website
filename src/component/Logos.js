import React,  {  useEffect }  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getcustomersLogo} from '../actions/appAction';


function Logos({ logos, getcustomersLogo  }) {
    
    useEffect(() => {
        getcustomersLogo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (!Array.isArray(logos) || logos.length <= 0) {
        return null;
      }

    return (
    
             <div className='logo__container'>
              {logos.map((logo, index) => {  
              return (
                 <div  key={index + 1} className="logo__div">
                       <img src={logo.img} alt="" className="logo__img">
                       </img>
                </div>

             );
             })} 
            </div>
  
    );
}
Logos.propTypes = {
    getcustomersLogo : PropTypes.func.isRequired,
    logos:PropTypes.array.isRequired,
 }
 
 const mapStateToProps = state => ({
     logos: state.appData.customersLogo
 })

export default connect(mapStateToProps ,{ getcustomersLogo})  (Logos);


