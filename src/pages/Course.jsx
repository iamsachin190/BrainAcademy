// pages/Courses.js
import React from 'react';
import CourseCard from '../components/CourseCard'; // import the course card component

const Courses = () => {
  const courses = [
    {
      id: 1,
      image: 'https://placehold.co/200x150',
      title: 'Class 10',
      description: 'Comprehensive learning materials for Class 10 students.',
    },
    {
      id: 2,
      image: 'https://placehold.co/200x150',
      title: 'Class 9',
      description: 'Detailed resources for Class 9 students to excel.',
    },
    {
      id: 3,
      image: 'https://placehold.co/200x150',
      title: 'Class 8',
      description: 'Tailored content for Class 8 students.',
    },
    // You can add more courses here
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <h1 className="text-2xl md:text-4xl font-bold">Our Courses</h1>
          <div className="flex-grow border-t-4 border-blue-600 ml-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-5">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              image={course.image}
              title={course.title}
              description={course.description}
              onClick={() => alert(`You selected ${course.title}`)} // Replace with actual navigation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
