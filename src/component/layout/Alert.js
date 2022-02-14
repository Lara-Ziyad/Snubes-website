import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alerts = ({alertData}) => {
  return (
      (alertData.lenght > 0) &&
        alertData.alerts.map(alert => (
          <div key={alert.id} className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle' /> {alert.msg}
          </div>
        ))
  );
};

Alerts.propTypes = {
    alertData:PropTypes.array.isRequired,
 }
 
 const mapStateToProps = state => ({
     alertData: state.alert
 })

export default connect(mapStateToProps ,{ }) ( Alerts);