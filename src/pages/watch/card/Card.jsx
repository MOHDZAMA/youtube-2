import React from "react";
import "./style.scss";

import dayjs from "dayjs";

function Card({ item }) {
  // console.log(item);

  return (
    <div className="card">
      <img src={item?.snippet?.thumbnails?.high?.url} alt="thumbnail" />
      <div className="card-b">
        <img src="./channel_logo.png" alt="chanel_logo" />
        <div className="card-b-info">
          <h4>
            {item?.snippet?.title?.length > 50
              ? item?.snippet?.title.slice(0, 80) + "..."
              : item?.snippet?.title}
          </h4>
          <span>{item?.snippet?.channelTitle}</span>
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

export default Card;
