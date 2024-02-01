import React from "react";
import "./style.scss";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Img from "../../../components/lazyLoadImage/Img";

function Card4({ item }) {
  const navigate = useNavigate();

  const handleChannelClick = (e) => {
    e.stopPropagation();
    navigate(`/${item?.snippet?.channelId}/videos`);
  };

  const handleClick = () => {
    if (item.id.videoId) {
      navigate(`/watch/${item.id.videoId}`);
    } else if (item.id.playlistId) {
      navigate(`/playlist/${item.id.playlistId}`);
    }
  };

  const truncatedTitle =
    item?.snippet?.title?.length > 50
      ? item?.snippet?.title
      : item?.snippet?.title;

  const formattedPublishDate = dayjs(
    item?.snippet?.publishTime.slice(0, 10)
  ).format("MMM D, YYYY");

  const truncatedDescription = item?.snippet?.description.slice(0, 100) + "...";

  return (
    <div className="card4" onClick={handleClick}>
      <Img
        src={item?.snippet?.thumbnails?.high?.url || "./no-thumbnail.jpg"}
        alt="no-thumbnail"
      />
      <div className="card4-b">
        <h4>{truncatedTitle}</h4>
        <div className="card4-b-info-s">
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
        <span>{formattedPublishDate}</span>
        <img src="../youtube.svg" alt="chanel_logo" />
        <small>{truncatedDescription}</small>
      </div>
    </div>
  );
}

export default Card4;
