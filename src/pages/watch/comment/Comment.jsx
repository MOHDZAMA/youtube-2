import React from "react";
import "./style.scss";
import dayjs from "dayjs";

import { commentData } from "../../../data/comment";

function Comment() {
  console.log(commentData.items);

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
