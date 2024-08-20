import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegFileAlt, FaAlignLeft, FaRobot, FaImages } from "react-icons/fa";
import Navbar from "../components/navbar";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="flex flex-wrap">
      <div className="p-2">
        <div className="p-2">
          <h2 className="text-2xl font-bold mb-2">AI ChatBot</h2>
          <div
            onClick={() => navigate("/chatbot")}
            className="bg-white shadow-lg rounded-lg h-48 w-52 cursor-pointer hover:border-2 hover:border-primary-dark hover:shadow-none transition-all"
          >
            <FaRobot className="text-primary-main text-6xl mt-2 ml-2" />
            <div className="p-3 pt-0">
              <h3 className="text-xl font-bold">Chatbot</h3>
              <p className="text-lg">Chat With AI Chatbot</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">AI SCIFI Images</h2>
        <div
          onClick={() => navigate("/scifi-image")}
          className="bg-white shadow-lg rounded-lg h-48 w-52 cursor-pointer hover:border-2 hover:border-primary-dark hover:shadow-none transition-all"
        >
          <FaImages className="text-primary-main text-6xl mt-2 ml-2" />
          <div className="p-3 pt-0">
            <h3 className="text-xl font-bold">Sci-Fi Image</h3>
            <p className="text-lg">Generate Sci-Fi images</p>
          </div>
        </div>
      </div>
    </div>

    
    </>
      );
};

export default Homepage;
