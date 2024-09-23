// components/CourseCard.js
import React from 'react';

const CourseCard = ({ image, title, description, onClick }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden w-64 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button 
          onClick={onClick} 
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
