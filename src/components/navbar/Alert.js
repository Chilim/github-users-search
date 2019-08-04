import React from 'react';

const Alert = ({ alert }) => {
  const showAlert = () => {
    return (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    );
  };
  return alert && showAlert();
};

export default Alert;
