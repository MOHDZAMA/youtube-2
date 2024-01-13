import React from "react";
import "./style.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../home/content/Content";
import Header from "../../components/header/Header";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Home;
