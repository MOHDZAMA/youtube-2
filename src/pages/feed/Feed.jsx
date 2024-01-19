import React, { useState } from "react";
import "./style.scss";

import Card from "./card/Card";
// import { searchData as data } from "../../data/search";

import useFetch from "../../hooks/useFetch";

function Feed() {
  const [params, setParams] = useState({
    q: "games",
    part: "snippet,id",
    regionCode: "US",
    maxResults: "50",
    order: "date",
  });
  const { data, loading, error } = useFetch("/search", params);

  return (
    <div className="feed">
      {data?.items?.map((item) => {
        return <Card item={item} key={item.id.videoId} />;
      })}
    </div>
  );
}

export default Feed;
