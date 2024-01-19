import React from "react";
import "./style.scss";

import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function Card3({ item }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (item.id.videoId) {
      navigate(`/watch/${item.id.videoId}`);
    } else if (item.id.playlistId) {
      navigate(`/playlist/${item.id.playlistId}`);
    }
  };
  return (
    <div className="card3" onClick={handleClick}>
      <img
        src={item?.snippet?.thumbnails?.high?.url || "./no-thumbnail.jpg"}
        alt="no-thumbnail.jpg"
      />
      <div className="card3-b">
        <div className="card3-b-info">
          <h4>
            {item?.snippet?.title?.length > 50
              ? item?.snippet?.title.slice(0, 80) + "..."
              : item?.snippet?.title}
          </h4>
          <div className="card3-b-info-s"></div>
          <span>
            {dayjs(item?.snippet?.publishTime.slice(0, 10)).format(
              "MMM D, YYYY"
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card3;
