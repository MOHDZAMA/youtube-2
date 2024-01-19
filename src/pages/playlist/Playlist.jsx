import React, { useState, useEffect } from "react";
import "./style.scss";

// import { playlistdetailsData } from "../../data/playlistdetails";
// import { playlistvideosData } from "../../data/playlistvideos";

import Card5 from "./card5/Card5";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Playlist() {
  const param = useParams();

  const [paramData, setParamData] = useState({
    playlistId: param.id,
    part: "snippet",
    maxResults: "50",
  });

  const [paramData2, setParamData2] = useState({
    id: param.id,
    part: "snippet",
  });

  const {
    data: playlistvideosData,
    loading,
    error,
  } = useFetch("/playlistItems", paramData);
  const { data: playlistdetailsData } = useFetch("/playlists", paramData2);

  useEffect(() => {
    setParamData({
      playlistId: param.id,
      part: "snippet",
      maxResults: "50",
    });
    setParamData2({
      id: param.id,
      part: "snippet",
    });
  }, [param.id]);

  return (
    <div className="playlist">
      <div className="playlist-l">
        <img
          src={playlistdetailsData?.items?.[0]?.snippet?.thumbnails?.high?.url}
          alt="no-thumbnail.jpg"
        />
        <div className="playlist-l-info">
          <h3>{playlistdetailsData?.items?.[0]?.snippet?.title}</h3>
          <span>{playlistdetailsData?.items?.[0]?.snippet?.channelTitle}</span>
        </div>
      </div>
      <div className="playlist-r">
        {playlistvideosData?.items?.map((item) => {
          return <Card5 item={item} />;
        })}
      </div>
    </div>
  );
}

export default Playlist;
