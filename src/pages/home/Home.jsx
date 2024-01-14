import React from "react";
import "./style.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../home/content/Content";
import Header from "../../components/header/Header";

function Home({ isSidebarOpen }) {
  return (
    <div className="home">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Content />
    </div>
  );
}

export default Home;
