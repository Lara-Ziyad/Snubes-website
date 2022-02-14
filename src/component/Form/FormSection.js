/* eslint-disable eqeqeq */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { addCustomer } from '../actions/formAction';
import FormInput from './FormInput'
import FormInfo from './FormInfo';
// or i can write props.addCustomer = what ever.... (props)
function FormSection({ customer: { customers } }) {
    


    useEffect(() => {
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [customers])




    return (
   
          <div className='contanir'>      
                <div className='wrapper'> 
              
                    <form className="form-basic" method="post" action="#">
           

           
            {(customers.length != 0) &&
                            <FormInfo />
                        }
                    
            {(customers.length == 0) &&
                            <FormInput/>
                        }      
                    
                    
                    </form>
                   
                   
             <div  >
                            <h5 className="Welcome__title">Welcome to Europe’s largest call center database </h5>
                            <div  className="Welcome__div">
                                <div className="Welcome__item">
                                    <h1>500+</h1>
                                    <p>Tender</p>
                                </div> 
                                <div className="Welcome__item">
                                    <h1>200+</h1>
                                    <p> Callcenter</p>
                                </div> 
                                <div className="Welcome__item">
                                    <h1>375.000</h1>
                                    <p>Agents available</p>
                                </div> 
                                <div className="Welcome__item">
                                    <h1>85%</h1>
                                    <p>Faster sourcing</p>
                                </div> 
             </div>
             </div>
               
    </div>
    </div>

    );
};

FormSection.propTypes = {
                
customer:PropTypes.object.isRequired,
}
        

const mapStateToProps = state => ({
    customer: state.form
  

})

export default connect(mapStateToProps,{}) (FormSection);