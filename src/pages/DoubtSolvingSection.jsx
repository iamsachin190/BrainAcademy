import React from 'react';

function DoubtSolvingSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">24/7 Doubt Solving</h2>
          <p className="text-lg text-gray-600 mt-2">
            Got a question? Our mentors and community are here to help you out at any time.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-comments text-blue-500 text-3xl mr-4"></i>
              <h3 className="text-xl font-semibold text-gray-800">Live Chat Support</h3>
            </div>
            <p className="text-gray-600">
              Reach out to a mentor or peer instantly through our live chat system for quick doubt solving.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-users text-blue-500 text-3xl mr-4"></i>
              <h3 className="text-xl font-semibold text-gray-800">Community Discussion</h3>
            </div>
            <p className="text-gray-600">
              Post your doubts in our discussion forums and get answers from fellow learners and mentors.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-video text-blue-500 text-3xl mr-4"></i>
              <h3 className="text-xl font-semibold text-gray-800">One-on-One Sessions</h3>
            </div>
            <p className="text-gray-600">
              Schedule personalized sessions with mentors to dive deep into your queries and resolve complex doubts.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300">
            Start Solving Doubts Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default DoubtSolvingSection;
