import React, { useState } from "react";
import "./style.scss";

import { playlistdetailsData } from "../../data/playlistdetails";
import { playlistvideosData } from "../../data/playlistvideos";

import Card5 from "./card5/Card5";

function Playlist() {
  const [paramData, setParamData] = useState({
    playlistId: "RDZiQo7nAkQHU",
    part: "snippet",
    maxResults: "50",
  });
  // const { data: searchData, loading, error } = useFetch("/playlistItems", paramData);
  // console.log(searchData);

  console.log(playlistdetailsData);
  console.log(playlistvideosData);
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
