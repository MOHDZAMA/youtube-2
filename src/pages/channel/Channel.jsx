import React, { useState, useEffect } from "react";
import "./style.scss";

// import { channeldetailData } from "../../data/channeldetail";
// import { channelvideosData } from "../../data/channelvideos";
import Card3 from "./card3/Card3";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Channel() {
  const param = useParams();

  const [paramData, setParamData] = useState({
    part: "snippet,statistics",
    id: param.id,
  });

  const [paramData2, setParamData2] = useState({
    channelId: param.id,
    part: "snippet,id",
    order: "date",
    maxResults: "50",
  });

  const { data: channeldetailData } = useFetch("/channels", paramData);
  const {
    data: channelvideosData,
    loading,
    error,
  } = useFetch("/search", paramData2);

  useEffect(() => {
    setParamData({
      part: "snippet,statistics",
      id: param.id,
    });
    setParamData2({
      channelId: param.id,
      part: "snippet,id",
      order: "date",
      maxResults: "50",
    });
  }, [param.id]);

  if (channeldetailData !== null || channelvideosData !== null) {
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
}

export default Channel;
