import React, { useEffect, useState } from "react";
import "./style.scss";
import { useLocation, matchRoutes } from "react-router-dom";

function Sidebar({ isSidebarOpen }) {
  const location = useLocation();

  const routes = [
    { path: "/watch/:id" },
    { path: "/search/:query" },
    { path: "/" },
    { path: "/playlist/:id" },
    { path: "/:id/videos" },
  ];
  const route = matchRoutes(routes, location);

  return (
    <div className="sidebar-top">
      {isSidebarOpen ? (
        route[0].route.path !== "/watch/:id" ? (
          <div className="sidebar">
            <div className="sidebar-items">
              <div className="item">
                <img src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/home.svg" />
                <span>Home</span>
              </div>
              <div className="item">
                <img
                  src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/shorts.svg"
                  alt="home"
                />
                <span>Shorts</span>
              </div>
              <div className="item">
                <img
                  src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/subscription.svg"
                  alt="home"
                />
                <span>Subscriptions</span>
              </div>
              <div className="item">
                <img
                  src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/library.svg"
                  alt="home"
                />
                <span>Library</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      ) : (
        <div
          className={
            route[0].route.path !== "/watch/:id" ? "sidebar2" : "sidebar3"
          }
        >
          <div className="menu-group">
            <div className="menu-item">
              <img src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/home.svg" />
              <span>Home</span>
            </div>
            <div className="menu-item">
              <img src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/shorts.svg" />
              <span>Shorts</span>
            </div>
            <div className="menu-item">
              <img src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/subscription.svg" />
              <span>Subscriptions</span>
            </div>
          </div>

          <div className="menu-group">
            <div className="menu-item">
              <img src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/library.svg" />
              <span>Library</span>
            </div>
            <div className="menu-item">
              <img src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/history.svg" />
              <span>History</span>
            </div>
            <div className="menu-item">
              <img src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/videos.svg" />
              <span>Your Videos</span>
            </div>
            <div className="menu-item">
              <img src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/watch-later.svg" />
              <span>Watch Later</span>
            </div>
            <div className="menu-item">
              <img src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/liked.svg" />
              <span>Liked Videos</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
