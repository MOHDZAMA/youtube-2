import React from "react";
import "./style.scss";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Img from "../../../components/lazyLoadImage/Img";

function Card3({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const videoId = item?.id?.videoId;
    const playlistId = item?.id?.playlistId;

    if (videoId) {
      navigate(`/watch/${videoId}`);
    } else if (playlistId) {
      navigate(`/playlist/${playlistId}`);
    }
  };

  if (item !== null) {
    const { snippet } = item;
    const thumbnailUrl =
      item?.snippet?.thumbnails?.high?.url || "./no-thumbnail.jpg";
    const formattedTitle =
      snippet?.title?.length > 50
        ? `${snippet.title.slice(0, 50)}...`
        : snippet?.title || "";
    const formattedPublishTime = dayjs(
      snippet?.publishTime?.slice(0, 10)
    ).format("MMM D, YYYY");

    return (
      <div className="card3" onClick={handleClick}>
        <Img src={thumbnailUrl} alt="no-thumbnail.jpg" />
        <div className="card3-b">
          <div className="card3-b-info">
            <h4>{formattedTitle}</h4>
            <div className="card3-b-info-s"></div>
            <span>{formattedPublishTime}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default Card3;
