import React from "react";
import "./style.scss";

import Sidebar from "../../components/sidebar/Sidebar";

import { Outlet } from "react-router-dom";

function Home({ isSidebarOpen }) {
  return (
    <div className="home">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      {/* <Content /> */}
      {/* <Channel /> */}
      {/* <Search /> */}
      {/* <Playlist /> */}
      <Outlet />
    </div>
  );
}

export default Home;
