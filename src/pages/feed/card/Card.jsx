import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import Img from "../../../components/lazyLoadImage/Img";

function Card({ item }) {
  const navigate = useNavigate();

  const handleChannelClick = (e) => {
    e.stopPropagation();
    navigate(`/${item?.snippet?.channelId}/videos`);
  };

  const handleClick = () => {
    if (item?.id?.videoId) {
      navigate(`/watch/${item.id.videoId}`);
    } else if (item?.id?.playlistId) {
      navigate(`/playlist/${item.id.playlistId}`);
    }
  };

  const thumbnailUrl =
    item?.snippet?.thumbnails?.high?.url || "../thumbnail.png";
  const title =
    item?.snippet?.title?.length > 80
      ? item?.snippet?.title.slice(0, 80) + "..."
      : item?.snippet?.title;
  const publishTime = dayjs(item?.snippet?.publishTime?.slice(0, 10)).format(
    "MMM D, YYYY"
  );

  return (
    <div className="card" onClick={handleClick}>
      <Img src={thumbnailUrl} alt="no-thumbnail.jpg" />
      <div className="card-b">
        <Img src="./youtube.svg" alt="channel_logo" />
        <div className="card-b-info">
          <h4>{title}</h4>
          <div className="card-b-info-s">
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
          </div>
          <span>{publishTime}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
