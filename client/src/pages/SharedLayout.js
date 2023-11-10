import React from "react";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/appContext";


const SharedLayout = () => {
  const {logoutUser}=useAppContext()
  return (
    <main>
      <div className="flex m-4 absolute">
        <button className="bg-blue-500 text-white p-2 rounded-md" onClick={()=>logoutUser()}>
          Logout
        </button>
      </div>
      <Outlet />
    </main>
  );
};

export default SharedLayout;
