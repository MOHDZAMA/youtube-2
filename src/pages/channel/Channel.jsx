import React from "react";
import "./style.scss";

import { channeldetailData } from "../../data/channeldetail";
import { channelvideosData } from "../../data/channelvideos";
import Card3 from "./card3/Card3";

function Channel() {
  console.log(channelvideosData);

  const { snippet, statistics, brandingSettings, contentDetails } =
    channeldetailData?.items[0];
  return (
    <div className="channel">
      <div className="banner">
        <img
          src={brandingSettings?.image?.bannerExternalUrl}
          alt="channel banner"
        />
      </div>
      <div className="channel-info">
        <img src={snippet?.thumbnails?.medium?.url} alt="channel thumbnail" />

        <div className="info">
          <h1>{snippet?.title}</h1>
          <span>{snippet?.customUrl}</span>

          <span>{statistics?.subscriberCount}</span>
          <span>{statistics?.videoCount}</span>

          <p>{snippet?.description?.slice(0, 150) + "..."} </p>
          <span>{statistics?.viewCount}</span>
          <div>
            <button>Subscribe</button>
            <button>Join</button>
          </div>
        </div>
      </div>
      <div className="channel-videos">
        <div className="channel-videos-t">
          <span>Videos</span>
          <span>Playlist</span>
        </div>
        <div className="channel-videos-container">
          {channelvideosData?.items?.map((item) => {
            return <Card3 item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Channel;
