import React from "react";
import "./style.scss";

import Card from "./card/Card";
import { searchData } from "../../data/search";

function Feed() {
  return (
    <div className="content">
      {searchData?.items?.map((item) => {
        return <Card item={item} key={item.id.videoId} />;
      })}
    </div>
  );
}

export default Feed;
