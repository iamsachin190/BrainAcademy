import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';
import CourseService from '../../services/courseService'

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const result = await CourseService.getAllCourses();
        setCourses(result.documents);
      } catch (error) {
        console.error('Failed to fetch courses', error);
      }
    };
    fetchCourses();
  }, []);

  const handleShare = (url) => {
    navigator.share ? navigator.share({ title: 'Course', url }) : alert("Share feature not supported.");
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Free Courses</h1>
      
      {/* Class Selector */}
      <div className="mb-4">
        <label htmlFor="classSelector" className="mr-2 font-semibold">Select Your Class:</label>
        <select 
          id="classSelector" 
          className="p-2 border rounded-md" 
          value={selectedClass} 
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">All Classes</option>
          <option value="Class 9">Class 9</option>
          <option value="Class 10">Class 10</option>
          <option value="Class 11">Class 11</option>
          <option value="Class 12">Class 12</option>
          {/* Add other classes as needed */}
        </select>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses
          .filter(course => !selectedClass || course.class === selectedClass)
          .map(course => (
            <div key={course.$id} className="bg-white rounded-lg shadow-md p-4 relative">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-lg" />
              <h2 className="text-xl font-semibold mt-2">{course.title}</h2>
              <p className="text-sm text-gray-600">Teacher: {course.teacher}</p>
              <p className="text-sm text-gray-600">Subject: {course.subject}</p>
              <p className="text-sm text-gray-600">Category: {course.category}</p>
              <p className="text-sm text-gray-600">Duration: {course.duration}</p>
              
              {/* Share Button */}
              <button
                onClick={() => handleShare(course.url)}
                className="absolute top-2 right-2 text-blue-600 hover:text-blue-800"
              >
                <FaShareAlt />
              </button>

              <Link 
                to={`/courses/${course.$id}`} 
                className="block bg-blue-600 text-white text-center mt-4 py-2 rounded-lg"
              >
                View Details
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CoursesPage;
