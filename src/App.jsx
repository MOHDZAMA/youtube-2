import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from ".//pages/home/Home";
import Watch from "./pages/watch/Watch";
import Channel from "./pages/channel/Channel";
import Search from "./pages/search/Search";
import Playlist from "./pages/playlist/Playlist";
import Feed from "./pages/feed/Feed";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <Header toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} />}>
          <Route path="" element={<Feed />} />
          <Route path="search/:query" element={<Search />} />
          <Route path="playlist/:id" element={<Playlist />} />
          <Route path=":id/videos" element={<Channel />} />
          <Route path="watch/:id" element={<Watch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
