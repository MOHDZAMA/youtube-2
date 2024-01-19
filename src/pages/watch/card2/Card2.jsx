import React from "react";
import "./style.scss";

import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function Card2({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (item.id.videoId) {
      navigate(`/watch/${item.id.videoId}`);
    } else if (item.id.playlistId) {
      navigate(`/playlist/${item.id.playlistId}`);
    }
  };

  const handleChannelClick = (e) => {
    e.stopPropagation();
    navigate(`/${item?.snippet?.channelId}/videos`);
  };

  const shortenTitle = (title) => {
    if (title && title.length > 50) {
      return title.slice(0, 50) + "...";
    }
    return title;
  };

  return (
    <div className="card2" onClick={handleClick}>
      <img
        src={item?.snippet?.thumbnails?.medium?.url || "../thumbnail.png"}
        alt="thumbnail"
      />

      <div className="card2-b-info">
        <h4>{shortenTitle(item?.snippet?.title)}</h4>
        <span onClick={handleChannelClick}>{item?.snippet?.channelTitle}</span>
        <span>
          {dayjs(item?.snippet?.publishTime?.slice(0, 10)).format(
            "MMM D, YYYY"
          )}
        </span>
      </div>
    </div>
  );
}

export default Card2;
