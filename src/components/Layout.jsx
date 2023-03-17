import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";


const Layout = () => {
  return (
    <div className="flex h-screen">
        <Sidebar />
      <div className="flex ml-[341px] w-3/4">
        <Outlet />
        <aside className="border-l border-l-gray-600 h-full w-1/3">
          Side
        </aside>
      </div>
    </div>
  );
};
export default Layout;
