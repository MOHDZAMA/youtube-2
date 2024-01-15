import React from "react";
import "./style.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../home/content/Content";
import Header from "../../components/header/Header";
import Channel from "../channel/Channel";
import Search from "../search/Search";

function Home({ isSidebarOpen }) {
  return (
    <div className="home">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      {/* <Content /> */}
      <Channel />
      {/* <Search /> */}
    </div>
  );
}

export default Home;
