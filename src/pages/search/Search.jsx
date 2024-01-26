// import {searchData} from '../../data/search';
import React, { useState, useEffect } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Card4 from "./card4/Card4";

function Search() {
  const { query } = useParams();
  const [paramData, setParamData] = useState({
    q: query,
    part: "snippet,id",
    maxResults: "50",
    order: "date",
  });
  const { data: searchData, loading, error } = useFetch("/search", paramData);

  useEffect(() => {
    if (query) {
      setParamData({
        q: query,
        part: "snippet,id",
        maxResults: "50",
        order: "date",
      });
    }
  }, [query]);

  return (
    <div className="search">
      <div className="search-container">
        {searchData?.items?.map((item) => (
          <Card4 item={item} key={item.id.videoId} />
        ))}
      </div>
    </div>
  );
}

export default Search;
