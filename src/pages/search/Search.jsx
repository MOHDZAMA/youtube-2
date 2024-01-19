import React, { useState, useEffect } from "react";
import "./style.scss";
// import { searchData } from "../../data/search";
import useFetch from "../../hooks/useFetch";

import Card4 from "./card4/Card4";
import { useParams } from "react-router-dom";

function Search() {
  const param = useParams();
  const [paramData, setParamData] = useState("");
  const { data: searchData, loading, error } = useFetch("/search", paramData);

  useEffect(() => {
    if (param.query !== null) {
      setParamData({
        q: param.query,
        part: "snippet,id",
        maxResults: "50",
        order: "date",
      });
    }
  }, [param.query]);

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
