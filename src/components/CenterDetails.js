
import React from 'react';
import Map from './Map';
import './CenterDetails.css';

const CenterDetails = ({ center, onClose }) => {
  return (
    <div className="center-details-popup-content">
      <button className="close-button" onClick={onClose}>×</button>
      <h1>{center.name}</h1>
      <div className="center-info">
        <p><strong>Email:</strong> {center.email}</p>
        <p><strong>Phone:</strong> {center.phone}</p>
        <p><strong>Website:</strong> <a href={center.website} target="_blank" rel="noopener noreferrer">{center.website}</a></p>
        <p><strong>Address:</strong> {center.address.address1}, {center.address.city}, {center.address.state} {center.address.postcode}</p>
      </div>
      <Map location={center.location} />
    </div>
  );
};

export default CenterDetails;