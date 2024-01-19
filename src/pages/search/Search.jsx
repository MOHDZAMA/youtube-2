import React, { useState } from "react";
import "./style.scss";
import { searchData } from "../../data/search";

import Card4 from "./card4/Card4";

function Search() {
  const [paramData, setParamData] = useState({
    q: "games",
    part: "snippet,id",
    maxResults: "50",
    order: "date",
  });
  // const { data: searchData, loading, error } = useFetch("/search", paramData);
  console.log(searchData);

  return (
    <div className="search">
      <div className="search-container">
        {searchData?.items?.map((item) => {
          return <Card4 item={item} key={item.id.videoId} />;
        })}
      </div>
    </div>
  );
}

export default Search;
