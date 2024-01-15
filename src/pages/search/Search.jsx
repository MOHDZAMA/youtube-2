import React from "react";
import "./style.scss";
import { searchData } from "../../data/search";

import Card4 from "./card4/Card4";

function Search() {
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
