import React from "react";
import "./style.scss";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function Card5({ item }) {
  const navigate = useNavigate();

  const handleChannelClick = (e) => {
    e.stopPropagation();
    navigate(`/${item?.snippet?.channelId}/videos`);
  };

  const formattedPublishDate = dayjs(
    item?.snippet?.publishAt?.slice(0, 10)
  ).format("MMM D, YYYY");

  return (
    <div
      className="card5"
      onClick={() => navigate(`/watch/${item?.snippet?.resourceId?.videoId}`)}
    >
      <img
        src={item?.snippet?.thumbnails?.medium?.url || "./no-thumbnail.jpg"}
        alt="no-thumbnail"
      />
      <div className="card5-b">
        <h4>{item?.snippet?.title}</h4>
        <div className="card5-b-info-s">
          <span onClick={handleChannelClick}>
            {item?.snippet?.channelTitle}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" />
          </svg>
          <span>{formattedPublishDate}</span>
        </div>
      </div>
    </div>
  );
}

export default Card5;
