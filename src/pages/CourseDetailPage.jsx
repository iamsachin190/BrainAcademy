import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseService from '../services/courseService';

const CourseDetailPage = () => {
  const { id } = useParams(); // Retrieve the course ID from the URL
  const [course, setCourse] = useState({});
  const [activeTab, setActiveTab] = useState('details'); // Default tab

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseData = await CourseService.getCourseById(id);
        setCourse(courseData);
      } catch (error) {
        console.error('Failed to fetch course details:', error);
      }
    };
    fetchCourse();
  }, [id]);

  const renderContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div>
            <h3 className="text-xl font-semibold">Course Details</h3>
            <p>{course.description}</p>
            <p><strong>Teacher:</strong> {course.teacher}</p>
            <p><strong>Subject:</strong> {course.subject}</p>
            <p><strong>Category:</strong> {course.category}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
          </div>
        );
      case 'lectures':
        return (
          <div>
            <h3 className="text-xl font-semibold">Lectures</h3>
            <iframe src={course.url} title="Course Lecture" width="100%" height="500px" allowFullScreen></iframe>
          </div>
        );
      case 'notes':
        return (
          <div>
            <h3 className="text-xl font-semibold">Notes</h3>
            <p>Downloadable notes related to this course.</p>
                
          </div>
        );
      case 'dpp':
        return (
          <div>
            <h3 className="text-xl font-semibold">DPP (Daily Practice Problems)</h3>
            <p>Daily practice problems related to this course.</p>
            {/* Add list or link to DPP PDFs here */}
          </div>
        );
      case 'ask-doubt':
        return (
          <div>
            <h3 className="text-xl font-semibold">Ask a Doubt</h3>
            <p>Post your questions and interact with mentors or fellow students.</p>
            {/* Form or interface for asking doubts */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6 border-b-2 pb-2">
        <button onClick={() => setActiveTab('details')} className={`px-4 py-2 ${activeTab === 'details' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}>
          Details
        </button>
        <button onClick={() => setActiveTab('lectures')} className={`px-4 py-2 ${activeTab === 'lectures' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}>
          Lectures
        </button>
        <button onClick={() => setActiveTab('notes')} className={`px-4 py-2 ${activeTab === 'notes' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}>
          Notes
        </button>
        <button onClick={() => setActiveTab('dpp')} className={`px-4 py-2 ${activeTab === 'dpp' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}>
          DPP
        </button>
        <button onClick={() => setActiveTab('ask-doubt')} className={`px-4 py-2 ${activeTab === 'ask-doubt' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}>
          Ask Doubt
        </button>
      </div>

      {/* Render Content Based on Active Tab */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        {renderContent()}
      </div>
    </div>
  );
};

export default CourseDetailPage;
