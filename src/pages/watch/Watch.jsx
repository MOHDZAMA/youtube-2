import React from "react";
import "./style.scss";
import dayjs from "dayjs";

import Card from "./card2/Card2";
import { suggestedData } from "../../data/suggested";
import Sidebar from "../../components/sidebar/Sidebar";
import { videodetailsData } from "../../data/videodetails";
import Comment from "./comment/Comment";

function Watch() {
  const { snippet, statistics, id } = videodetailsData.items[0];
  return (
    <div className="watch">
      <div className="watch-l">
        <div className="watch-l-container">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="watch-l-info">
            <h2>{snippet.title}</h2>
            <div className="watch-l-info-c">
              <div className="watch-l-info-c-t">
                <img src="./no-thumbnail.jpg" alt="thumbnail" />
                <div className="watch-l-info-c-t-s">
                  <h4>channelTitle </h4>
                  <span>subscriberCount </span>
                </div>
                <button>subscribe</button>
              </div>
              <div className="watch-l-info-c-m">
                <button>{"like" + statistics.likeCount}</button>
                <button>dislike</button>
                <button>share</button>
                <button>download</button>
                <button>s</button>
              </div>
            </div>
            <div className="watch-l-info-b">
              <span>{statistics.viewCount}</span>
              <span>
                {dayjs(snippet?.publishTime?.slice(0, 10)).format(
                  "MMM D, YYYY"
                )}
              </span>
              <p>{snippet?.description?.slice(0, 300) + "..."}</p>
            </div>
          </div>
          <div className="watch-l-comment">
            <div>
              <h2>{statistics?.commentCount + " Comments"}</h2>
            </div>
            <Comment />
          </div>
        </div>
      </div>

      <div className="watch-r">
        {suggestedData?.items?.map((item) => {
          return (
            <Card item={item} key={item.id.videoId || item.id.playlistId} />
          );
        })}
      </div>
    </div>
  );
}

export default Watch;
