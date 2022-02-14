import React, { useState , useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCustomer}
    from '../../actions/formAction';
import CountryCode from './CountryCode';


function FormInput({ country: { getCountry }, addCustomer,country
    // lookupCountry
}) {
 
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        tel: '',
        email: '',
    })    
    const { company, name, tel, email } = formData;
    const [alert, setAlert] = useState({
        msg: '',
        type: '',
    });
    const { msg,type } = alert;
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = (e) => {
        e.preventDefault();
        let checkNum =/\d+/
        let checkEmail=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (name.trim() === '' || email.trim() === '' || tel.trim() === '' || company.trim() === '') {
            setAlert({ msg: 'Please fill in all fields', type: 'red' });
        } 

        else if (company.length >= 80 || checkNum.test(company.trim())
   
        ) {
            setAlert({ msg: 'Company name can not include Numbers or more than 50 characters', type: 'red' });
        }

        else if (name.length >=  50) {
            setAlert({ msg: 'Name can not imore than 80 characters', type: 'red' });
        }
       
        else if (!checkEmail.test(email.trim())) {
            setAlert({ msg: 'Please enter a valid email address', type: 'red' });
          }
         else {

        const newCustomer = {
            company,
            name,
             country,
            tel,
            email
        }
        addCustomer(newCustomer);
    }

    }
    

    return (
        <div> 
             <div className="form-title-row">
                <h3>Find inbound call center for your company</h3>
                <p>Use our Al and Big Data driven call cnter sourcing solution</p>
            </div>
            <div className="form-row">
                <label> 
                    <p> Company  </p> </label>
                    <input type="text"
                    name="company"
                    placeholder='Company'
                           value={company} 
                           className={`form__input alert__${type}`}
                           onChange={onChange} />
             </div>

             <div className="form-row">
                <label>
                  <p>Full name</p> </label>
                <input
                    className={`form__input alert__${type}`}
                    type="text"
                    name="name"
                    placeholder=' Full name'
                        value={name}
                        onChange={onChange} />
               
              </div>
            
             <div className="form-row">  
                 <label>
                    <p>Phone</p></label>
                <div 
                    
                    style={{ display: "flex" }}
                    
                >
                    < CountryCode />
                    <input style={{
                        width: "72%",
                        
                          }}
                        className={`form__input alert__${type}`}
                        type="tel" name="tel"
                        placeholder=' ' value={tel}
                        onChange={onChange}
                    /> 
                 </div>
             </div>

               <div className="form-row">
                 <label>
                   <p>Email</p> </label>
                <input type="email"
                    className={`form__input alert__${type}`}
                        name="email"
                        value={email}
                    onChange={onChange}
                    placeholder=' name@mail.com'/>

               </div>
           <div className="form">
                <button type="submit"
                    onClick={onSubmit}>Get Information</button>
                {alert && msg && <p >{msg}</p>}
            </div>
        </div>
    );
}
FormInput.propTypes = {
    addCustomer: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    country: state.form
})

export default connect(mapStateToProps, { addCustomer})(FormInput);




