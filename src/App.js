import React from "react";
import ProfilePage from "./ProfilePage";
import Particle from "./Particle";
import { ReactTyped } from "react-typed";
import { useState } from "react";
import { FiShare2 } from "react-icons/fi";

function App() {
  const [showSharePopup, setShowSharePopup] = useState(false); // <-- HARUS DI SINI
  const [copySuccess, setCopySuccess] = useState(false);
  const url = "https://faizargya-profile.vercel.app";
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // reset notif 2 detik
    } catch (err) {
      console.error("Gagal menyalin tautan", err);
    }
  };


  
  return (
    <div className="App">
   <ProfilePage />
   <Particle />
    <header className="App-Header"></header>
<div>
      {/* Tombol share */}
      <div className="absolute bottom-6 right-6 z-10">
        <button
          className="p-3 bg-white rounded-full hover:bg-white/20"
          onClick={() => setShowSharePopup(true)}
        >
          <FiShare2 size={20} />
        </button>
      </div>

      {/* Popup share */}
      {showSharePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-black w-[300px]">
            <h2 className="text-lg font-semibold mb-4 text-center">Bagikan ke:</h2>
            <div className="flex flex-col gap-3">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://faizargya-profile.vercel.app" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
              <a href="https://wa.me/?text=https://faizargya-profile.vercel.app" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
              <a href="https://twitter.com/intent/tweet?url=https://faizargya-profile.vercel.app" target="_blank" rel="noopener noreferrer">🐦 X (Twitter)</a>
              <button
                onClick={handleCopyLink}
                className="bg-gray-200 text-sm px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                📋 Salin Tautan
              </button>
              {copySuccess && (
                <span className="text-green-500 text-xs text-center">✅ Tautan berhasil disalin!</span>
              )}
            </div>
            <button onClick={() => setShowSharePopup(false)} className="mt-4 block mx-auto text-red-500 hover:underline">
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>

   </div>
   
    
   )
}


export default App;
