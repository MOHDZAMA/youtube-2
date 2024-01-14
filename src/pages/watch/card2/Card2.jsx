import React from "react";
import "./style.scss";

import dayjs from "dayjs";

function Card2({ item }) {
  // console.log(item);

  return (
    <div className="card2">
      <img
        src={item?.snippet?.thumbnails?.medium?.url || "./no-thumbnail.jpg"}
        alt="thumbnail"
      />

      <div className="card2-b-info">
        <h4>
          {item?.snippet?.title?.length > 50
            ? item?.snippet?.title.slice(0, 50) + "..."
            : item?.snippet?.title}
        </h4>
        <span>{item?.snippet?.channelTitle}</span>
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
