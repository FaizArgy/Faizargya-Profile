import React from "react";
import {
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import { FaUser, FaMedal, FaGamepad } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { ReactTyped } from "react-typed";
import profileImg from "./assets/profile.jpg";




const App = () => {
  return (
    <div className="min-h-screen bg-[#02041E] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="relative z-10 text-center space-y-4">
        <img
          src={profileImg}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto border-4 border-white"
        />
        <h1 className="text-3xl font-bold">
          <ReactTyped strings={["Faiz Argyanto", "Faiz"]} typeSpeed={100} backSpeed={90} loop />
        </h1>

        <p className="text-sm text-gray-300">Students at Muhammadiyah 1 Ajibarang Vocational School</p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 text-xl mt-3">
          <a href="https://www.tiktok.com/@faizargyanto" className="hover:text-gray-400"><FaTiktok /></a>
          <a href="https://www.instagram.com/crispypaiz_/" className="hover:text-gray-400"><FaInstagram /></a>
          <a href="https://www.youtube.com/@FaizArgyantoo" className="hover:text-gray-400"><FaYoutube /></a>
          <a href="https://github.com/FaizArgy" className="hover:text-gray-400"><FaGithub /></a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-3 mt-6">
          {/* Tombol Portfolio */}
          <a
            href="https://faizargyanto.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full shadow w-72 hover:scale-105 transition"
          >
            <FaUser /> Portfolio
          </a>

          {/* Tombol Achievement (Coming Soon) */}
          <div className="flex flex-col items-center">
            <button
              disabled
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-300 text-gray-600 rounded-full shadow w-72 cursor-not-allowed"
            >
              <FaMedal /> Achievement
            </button>
            <p className="text-sm text-gray-400 mt-1">Coming soon</p>
          </div>
        </div>

      </div>

      {/* Share button */}
    
    </div>
  );
};

export default App;
