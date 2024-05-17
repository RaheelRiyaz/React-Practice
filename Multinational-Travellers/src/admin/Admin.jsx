// import React from 'react'

import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";


function Admin() {
  

  return (
    <div className="flex">
      <div className="sidebar w-[20%] h-screen bg-gray-400">
        <Sidebar />
      </div>
      <div className="content w-[80%] max-h-screen overflow-auto bg-white">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
