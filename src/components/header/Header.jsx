import React, { useState } from "react";
import "./style.scss";

import { useNavigate } from "react-router-dom";

function Header({ toggleSidebar }) {
  const navigate = useNavigate();
  const [searchvalue, setSearchvalue] = useState("");

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://raw.githubusercontent.com/parthwebdev/UI-Components/7e774add0ddd88a4fb4057b01ad1f75a3edb4a03/Sidebars/01/svg/menu.svg"
          alt="menu"
          onClick={toggleSidebar}
        />

        <img
          src="https://www.logo.wine/a/logo/YouTube/YouTube-White-Dark-Background-Logo.wine.svg"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="header-middle">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchvalue(e.target.value)}
        />

        <button onClick={() => navigate(`/search/${searchvalue}`)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            // class="w-2 h-2"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              // clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="header-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          // class="w-6 h-6"
        >
          <path
            // stroke-linecap="round"
            // stroke-linejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>

        <div>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
