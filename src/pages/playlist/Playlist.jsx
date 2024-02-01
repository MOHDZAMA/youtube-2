// import { playlistdetailsData } from "../../data/playlistdetails";
// import { playlistvideosData } from "../../data/playlistvideos";
import React, { useState, useEffect } from "react";
import "./style.scss";
import Card5 from "./card5/Card5";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Playlist() {
  const { id } = useParams();

  const [paramData, setParamData] = useState({
    playlistId: id,
    part: "snippet",
    maxResults: "50",
  });

  const [paramData2, setParamData2] = useState({
    id: id,
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
      playlistId: id,
      part: "snippet",
      maxResults: "50",
    });
    setParamData2({
      id: id,
      part: "snippet",
    });
  }, [id]);

  if (playlistdetailsData && playlistvideosData) {
    const { snippet } = playlistdetailsData?.items?.[0];
    return (
      <div className="playlist">
        <div className="playlist-l">
          <img src={snippet?.thumbnails?.high?.url} alt="no-thumbnail.jpg" />
          <div className="playlist-l-info">
            <h3>{snippet?.title}</h3>
            <span>{snippet?.channelTitle}</span>
          </div>
        </div>
        <div className="playlist-r">
          {playlistvideosData?.items?.map((item) => {
            return <Card5 item={item} key={item?.contentDetails?.videoId} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div>{loading}</div>;
  }
}

export default Playlist;
