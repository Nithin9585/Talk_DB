"use client"; 
import { useState } from "react";
import Searchbar from "./searchbar";
import SideBar from "./sidebar";

function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-gray-700">
      <div className="fixed top-4 left-4 z-10 cursor-pointer" onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-menu-button-fill text-white"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h8A1.5 1.5 0 0 0 11 3.5v-2A1.5 1.5 0 0 0 9.5 0zm5.927 2.427A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>

      {isSidebarVisible && (
        <div className="sidebar w-[30%] bg-gray-800 border-r-2 border-gray-600">
          <SideBar />
        </div>
      )}

      <div className="flex flex-col w-full h-screen">
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-black-800 p-4 text-white">
            LOGO
          </div>
        </div>
        <div className="bg-gray-900 p-4 w-full border-t-2 border-gray-700">
          <Searchbar />
        </div>
      </div>
    </div>
  );
}

export default Home;
