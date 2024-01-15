import React from "react";
import "./style.scss";

import dayjs from "dayjs";

function Card4({ item }) {
  return (
    <div className="card4">
      <img
        src={item?.snippet?.thumbnails?.high?.url || "./no-thumbnail.jpg"}
        alt="no-thumbnail.jpg"
      />
      <div className="card4-b">
        <h4>
          {item?.snippet?.title?.length > 50
            ? item?.snippet?.title
            : item?.snippet?.title}
        </h4>
        <div className="card4-b-info-s">
          <span>{item?.snippet?.channelTitle}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            // class="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
              // clip-rule="evenodd"
            />
          </svg>
        </div>
        <span>
          {dayjs(item?.snippet?.publishTime.slice(0, 10)).format("MMM D, YYYY")}
        </span>
        <img src="./youtube.svg" alt="chanel_logo" />
        <small>{item?.snippet?.description.slice(0, 100) + "..."}</small>
      </div>
    </div>
  );
}

export default Card4;
