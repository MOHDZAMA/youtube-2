import React from "react";
import "./style.scss";

import Card from "./card/Card";
import { suggestedData } from "../../data/suggested";

function Watch() {
  console.log(suggestedData.items);
  return (
    <div className="watch">
      <div className="watch-l">
        <div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/9bZkp7q19f0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="watch-l-info">
            <h1>title</h1>
            <div>
              <span>5.3M views . </span>
              <span>5 days ago</span>
            </div>
            <p>description</p>
          </div>
          <div className="watch-l-buttons">
            <span>comments</span>
          </div>
        </div>
      </div>
      <div className="watch-r">
        {suggestedData?.map((item) => {
          return <Card item={item} key={item.id.videoId} />;
        })}
      </div>
    </div>
  );
}

export default Watch;
