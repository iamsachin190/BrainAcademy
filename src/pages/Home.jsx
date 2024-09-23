import React, { useState } from "react";
import Logo from "../Images/BrainLogo.png"; 
import boyChar from  "../Images/BoysChar.png"; 

import Icon from "../Images/LogoIcon.png" ;
import Footer from "../components/Footer";
import { Link } from "react-router-dom"; 
import ContactUs from "../components/ContactUs";
import DoubtSolvingSection from "./DoubtSolvingSection";






function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOfferBox, setShowOfferBox] = useState(true); 
    return ( 
       <>
       {showOfferBox && (
        <div className="bg-blue-100 text-blue-900 p-4 rounded-lg shadow-md mx-4 mt-4">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">
              📚 Welcome to BrainAcademy! We're offering 
              <span className="font-bold text-blue-500"> free tests</span>, 
              <span className="font-bold text-blue-500"> personalized courses</span>, and 
              <span className="font-bold text-blue-500"> 24/7 doubt solving</span>. 
              Sign up today to make your learning easier!
            </p>
            <button
              className="text-blue-500 hover:text-blue-700 font-bold text-lg ml-4"
              onClick={() => setShowOfferBox(false)} // Close button to hide the offer box
            >
              ✖
            </button>
          </div>
        </div>
      )}
        

       <div className="p-4 bg-white shadow-md">
  <div className="flex items-center justify-between">
    {/* Logo on the left */}
    <div className="flex items-center">
      <img
        src="https://placehold.co/50x50"
        alt="BrainAcademy logo"
        className="w-12 h-12"
      />
      <span className="ml-2 text-lg font-bold">BrainAcademy</span>
    </div>

    {/* Hamburger menu for mobile view */}
    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-700 focus:outline-none"
      >
        <i className="fas fa-bars text-2xl"></i>
      </button>
    </div>

    {/* Links in desktop view (aligned right) */}
    <div
      className={`${
        menuOpen ? "flex" : "hidden"
      } flex-col md:flex-row items-center md:space-x-6 md:ml-auto space-y-4 md:space-y-0 md:flex mt-4 md:mt-0 bg-gray-800 p-4 rounded-lg`}
    >
      <a
        href="#"
        className="text-lg font-semibold text-white border-b-2 border-transparent hover:border-gray-400"
      >
        TEST
      </a>
      <a
        href="#"
        className="text-lg font-semibold text-white border-b-2 border-transparent hover:border-gray-400"
      >
        COURSE
      </a>
      <a
        href="#"
        className="text-lg font-semibold text-white border-b-2 border-transparent hover:border-gray-400"
      >
        ASK DOUBT
      </a>
      <a
        href="#"
        className="text-lg font-semibold text-white border-b-2 border-transparent hover:border-gray-400"
      >
        ABOUT
      </a>
      <a
        href="#"
        className="px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-full"
      >
        GET STARTED
      </a>
    </div>
  </div>
</div>



    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
            <div className="font-aladin lg:mb-20 text-center md:text-left md:mr-8 mb-8 md:mb-0">
              <h1 className="text-3xl tracking-widest md:text-5xl   text-black mb-4">
                MAKE YOUR
              </h1>
              <h1 className="text-3xl tracking-widest  md:text-5xl  text-black mb-4">
                LEARNING <span className="text-blue-500">MORE</span>
              </h1>
              <h1 className="text-3xl tracking-widest md:text-5xl  text-black mb-12">
                EASIER WITH
              </h1>
              <div className="flex items-center justify-center md:justify-start mb-8">
                <img className="h-10 w-10" src={Icon} />
                <span className="text-xl ml-3 tracking-widest md:text-3xl  text-black">
                  BRAINACADEMY
                </span>
              </div>
              <div className="flex space-x-4 justify-center  md:justify-start">
                <button className="bg-blue-600 text-white px-8 py-2 rounded lg:mr-20">
                  Signup
                </button>
                <button className="bg-white text-blue-600 border border-blue-600 px-8 py-2 rounded ">
                  Signin
                </button>
              </div>
            </div>
            <div className="lg:ml-10">
              <img
                src={boyChar}
                alt="Animated character jumping with excitement"
                className="w-64 md:w-96"
                width="400"
                height="400"
              />
            </div>
          </div>

          <DoubtSolvingSection/>

          <div className="p-4 md:p-8">
                    <div className="flex items-center mb-4">
                        <h1 className="text-2xl md:text-4xl font-bold">Test</h1>
                        <div className="flex-grow border-t-4 border-blue-600 ml-4"></div>
                    </div>
                   
                    <div className="flex flex-col md:flex-row p-4 md:p-8 rounded-lg shadow-lg">
                        <img src="https://placehold.co/300x200" alt="A child wearing headphones and giving a thumbs up while using a laptop" className="rounded-lg w-full md:w-1/2 mb-4 md:mb-0 md:mr-8"/>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">You Want To Know Where You Stand?</h2>
                            <p className="text-gray-800 mb-4">
                                Attempt <a href="#" className="text-blue-600">A Free Test</a> Now To Check Your Capabilities, That Helps You To Identify The Areas Of Strength And Weakness, Which Can Help Guide Further Study.
                            </p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">Attempt Test</button>
                        </div>
                    </div>
                </div>
          
          
                <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <h1 className="text-2xl md:text-4xl font-bold">Our Courses</h1>
            <div className="flex-grow border-t-4 border-blue-600 ml-4"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-10 mt-5">
            {/* Course 1 */}
            <div className="bg-white rounded-lg overflow-hidden w-64 text-center shadow-md">
              <img
                src="https://placehold.co/200x150"
                alt="Class 10"
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Class 10</h3>
                <button className="bg-purple-700 text-white py-2 px-4 rounded mt-4">
                  More
                </button>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white rounded-lg overflow-hidden w-64 text-center shadow-md">
              <img
                src="https://placehold.co/200x150"
                alt="Class 9"
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Class 9</h3>
                <button className="bg-purple-700 text-white py-2 px-4 rounded mt-4">
                  More
                </button>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-white rounded-lg overflow-hidden w-64 text-center shadow-md">
              <img
                src="https://placehold.co/200x150"
                alt="Class 8"
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Class 8</h3>
                <button className="bg-purple-700 text-white py-2 px-4 rounded mt-4">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <h1 className="text-2xl md:text-4xl font-bold">About Us</h1>
            <div className="flex-grow border-t-4 border-blue-600 ml-4"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-10 px-5">
            <div className="max-w-md text-center md:text-left md:mr-8">
              <h2 className="text-xl font-bold mb-4">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                BrainAcademy is committed to making learning easier and more accessible for students from various classes.
              </p>
              <p className="text-gray-600 mb-4">
                We offer comprehensive courses, resources, and one-on-one support to help students achieve their academic goals.
              </p>
              <button className="bg-purple-700 text-white py-2 px-4 rounded">
                Learn More
              </button>
            </div>

            <div className="mt-8 md:mt-0">
              <img
                src="https://placehold.co/400x250"
                alt="Academy environment"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>


 


                <footer className="bg-gray-900 text-white py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="flex items-center mb-4 md:mb-0">
                                <img src="https://placehold.co/50x50" alt="Company Logo" className="h-10 w-10"/>
                            </div>
                            <div className="flex flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 md:space-x-8">
                                <div className="flex flex-col md:flex-row md:space-x-8">
                                    <div>
                                        <h4 className="font-semibold mb-2">SOLUTIONS</h4>
                                        <ul>
                                            <li>Explainable AI</li>
                                            <li>ML Monitoring</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">USE CASES</h4>
                                        <ul>
                                            <li>Fraud</li>
                                            <li>Churn detection</li>
                                            <li>Underwriting</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row md:space-x-8">
                                    <div>
                                        <h4 className="font-semibold mb-2">RESOURCES</h4>
                                        <ul>
                                            <li>Resource Hub</li>
                                            <li>Blog</li>
                                            <li>Learn More</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">COMPANY</h4>
                                        <ul>
                                            <li>About Us</li>
                                            <li>Careers</li>
                                            <li>Events</li>
                                            <li>Contact Us</li>
                                            <li>Privacy Policy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">SUBSCRIBE</h4>
                                    <form>
                                        <input type="text" placeholder="Name" className="mb-2 p-2 w-full text-black"/>
                                        <input type="email" placeholder="Company Email" className="mb-2 p-2 w-full text-black"/>
                                        <button type="submit" className="bg-green-500 text-white p-2 w-full">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                            <p className="mb-4 md:mb-0">© BRAINACADEMY 2024</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-white"><i className="fas fa-peace"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </footer>
              



       </>
     );
}

export default Home;