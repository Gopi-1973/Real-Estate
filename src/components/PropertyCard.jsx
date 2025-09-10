import React from "react";

const PropertyCard = ({ image, title, price, location }) => {
  return (
    
    <div className="bg-white  rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform ">
      <img src={image} alt={title}/>
      <div className="p-4">
         <h2 className="text-xl font-bold text-gray-800">{title}</h2>
         <p className="text-gray-600
         ">{location}</p>
         <p className="text-blue-600">{price}</p>

      </div>
    </div>
  
  );
};

export default PropertyCard;
