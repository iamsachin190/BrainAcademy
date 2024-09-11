import React from "react";
import Navbar from "./Navbar"




function Home() {
    return ( 
       <>
       <div>
       <Navbar/>
      {/* Main Section */}
      <div className="bg-gray-100 min-h-screen p-8 flex justify-between items-center">
        {/* Left Section */}
        <div className="max-w-lg">
          <h1 className="text-5xl text-blue-900 font-bold mb-4">
            Make Your <br />
            <span className="text-black">LEARNING</span> <br />
            More <span className="text-black">Easier</span> <br />
            With <span className="text-black">BRAINACADEMY</span>
          </h1>
          <div className="mt-6">
            <button className="bg-black text-white py-2 px-6 rounded-md mr-4">
              Signup
            </button>
            <button className="bg-gray-300 text-black py-2 px-6 rounded-md">
              Signin
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-300 border-2 border-blue-300 w-96 h-64 flex justify-center items-center">
        <img src="../Images/BrainAcademyLogo.jpeg" alt="Brain Academy Logo" />
        </div>
      </div>
    </div>
       </>
     );
}

export default Home;