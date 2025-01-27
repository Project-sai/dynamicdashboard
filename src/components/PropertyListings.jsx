
import React from 'react';
import { propertyData } from '../data/properties';
import '../Styles/PropertyListings.css'; 

const PropertyListing = () => {
  return (
    <div className="property-listing">
      {propertyData.map((property, index) => (
        <div className="property-card" key={index}>
          <img src={property.image} alt={property.name} className="property-image" />
          <h3 className="property-name">{property.name}</h3>
          <p className="property-location">{property.location}</p>
          <p className="property-price">${property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyListing;
