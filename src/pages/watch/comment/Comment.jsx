import React, { useState } from "react";
import "./style.scss";
import dayjs from "dayjs";

import { commentData } from "../../../data/comment";

function Comment() {
  const [paramData, setParamData] = useState({
    part: "snippet",
    videoId: "7ghhRHRP6t4",
    maxResults: "100",
  });
  // const { data: commentData, loading, error } = useFetch("/commentThreads", paramData);

  return (
    <>
      {commentData.items.map(({ snippet, id }) => (
        <div key={id} className="comment">
          <img src={snippet.topLevelComment.snippet.authorProfileImageUrl} />
          <div>
            <span>{snippet.topLevelComment.snippet.authorDisplayName}</span>
            <span>
              {dayjs(
                snippet?.topLevelComment.snippet.publishedAt?.slice(0, 10)
              ).format("MMM D, YYYY")}
            </span>
            <p>{snippet.topLevelComment.snippet.textDisplay}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Comment;
