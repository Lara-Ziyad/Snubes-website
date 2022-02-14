import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


function FormInfo({ customer: { customers } }) {
  

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [customers])

 
    return (
 
        <div className="confirm">
               <div className="form-title-row ' ">
                <h3 className="" >Thank you for your request!</h3>
                <p>You have taken the first step. Out expert will get in touch with you soon</p>
            </div>
            <div className="form-row">
                <label>
                    <span> Company </span> </label>
                    {customers.company && <h6>{customers.company}</h6>}
               
            </div>
            <div className="form-row">
                <label>
                    <span>Full name</span> </label>
                    {customers.company && <h6>{customers.name}</h6>}
                   
               
            </div>
          
            <div className="form-row">
                <label> 
                    <span>Phone</span></label>
                    {customers.company && <h6>{customers.tel}</h6>}
                       
               
            </div>

            <div className="form-row">
                <label>
                    <span>Email</span> </label>
                    {customers.company && <h6>{customers.email}</h6>}
               
            </div>
            

        </div>
          
    
          );
        }
FormInfo.propTypes = {
    // addCustomer: PropTypes.func.isRequired
    customer:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    customer: state.form


})


export default connect(mapStateToProps, {})(FormInfo);




  