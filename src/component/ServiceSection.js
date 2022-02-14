import React, {  useEffect }  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getServices} from '../actions/appAction';


function ServiceSection({ services, getServices}) {
    
    useEffect(() => {
        getServices()

        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        if (!Array.isArray(services) || services.length <= 0) {
            return null;
          }


    return (
        <div className="service__container">           
            {services.map((service, index) => {
                
                return (
                    <div className="servicesItem" key={index + 1}>          
                        <img src={service.img} alt="" className="servicesItem__img">
                 </img>
                 <div className="servicesItem__text">
                            <h5 className="servicesItem__title">
                                {/* {service.title} */}
                                {service.title}</h5>
              <p className="servicesItem__body">{service.body}</p>
                        </div>                
                    </div>
              );
            })}

        </div>
    );
}

ServiceSection.propTypes = {
   getServices: PropTypes.func.isRequired,
   services:PropTypes.array.isRequired,

}

const mapStateToProps = state => ({
    services: state.appData.services,
  
    

})

export default  connect(mapStateToProps ,{getServices}) (ServiceSection);