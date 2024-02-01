// import { commentData } from "../../../data/comment";
import React, { useEffect, useState } from "react";
import "./style.scss";
import dayjs from "dayjs";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
function Comment() {
  const { id } = useParams();
  const [paramData, setParamData] = useState({
    part: "snippet",
    videoId: id,
    maxResults: "100",
  });
  const {
    data: commentData,
    loading,
    error,
  } = useFetch("/commentThreads", paramData);

  useEffect(() => {
    setParamData({
      part: "snippet",
      videoId: id,
      maxResults: "100",
    });
  }, [id]);

  return (
    <>
      {commentData?.items?.map(({ snippet, id }) => (
        <div key={id} className="comment">
          <img src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl} />
          <div>
            <span>{snippet?.topLevelComment?.snippet?.authorDisplayName}</span>
            <span>
              {dayjs(
                snippet?.topLevelComment?.snippet?.publishedAt?.slice(0, 10)
              ).format("MMM D, YYYY")}
            </span>
            <p>{snippet?.topLevelComment?.snippet?.textDisplay}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Comment;
