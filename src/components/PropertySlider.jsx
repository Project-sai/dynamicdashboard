import React from "react";
import { motion } from "framer-motion";
import "../styles/Components.css";

const properties = [
  { name: "Roma Avenue", value: "0.91 Ether", trend: "+10%" },
  { name: "Thorian Park", value: "0.89 Ether", trend: "+19%" },
  { name: "Villa Mary", value: "0.71 Ether", trend: "+22%" },
];

const PropertySlider = () => {
  return (
    <div className="property-slider">
      <h3>My Portfolio</h3>
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ left: -300, right: 0 }}
      >
        {properties.map((property, index) => (
          <motion.div key={index} className="slider-item">
            <h4>{property.name}</h4>
            <p>{property.value}</p>
            <p>{property.trend}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PropertySlider;
