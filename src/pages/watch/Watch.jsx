// import { suggestedData } from "../../data/suggested";
// import { videodetailsData } from "../../data/videodetails";
import React, { useEffect, useState } from "react";
import "./style.scss";
import dayjs from "dayjs";
import Card2 from "./card2/Card2";
import Comment from "./comment/Comment";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Watch() {
  const { id } = useParams();

  const [paramData, setParamData] = useState({
    relatedToVideoId: id,
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  });
  const [paramData2, setParamData2] = useState({
    part: "contentDetails,snippet,statistics",
    id: id,
  });
  const { data: suggestedData } = useFetch("/search", paramData);
  const { data, loading, error } = useFetch("/videos", paramData2);

  useEffect(() => {
    setParamData({
      relatedToVideoId: id,
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    });
    setParamData2({
      part: "contentDetails,snippet,statistics",
      id: id,
    });
  }, [id]);

  if (data !== null && suggestedData !== null) {
    // console.log(suggestedData);
    const { snippet, statistics } = data?.items[0];

    return (
      <div className="watch">
        <div className="watch-l">
          <div className="watch-l-container">
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="watch-l-info">
              <h2>{snippet?.title}</h2>
              <div className="watch-l-info-c">
                <div className="watch-l-info-c-t">
                  <img src="../youtube.svg" alt="channel" />
                  <div className="watch-l-info-c-t-s">
                    <h4>{snippet?.channelTitle}</h4>
                    <span>subscriber </span>
                  </div>
                  <button>subscribe</button>
                </div>
                <div className="watch-l-info-c-m">
                  <button>{statistics?.likeCount}</button>
                  <button>dislike</button>
                  <button>share</button>
                  <button>s</button>
                </div>
              </div>
              <div className="watch-l-info-b">
                <span>{statistics?.viewCount}</span>
                <span>
                  {dayjs(snippet?.publishTime?.slice(0, 10)).format(
                    "MMM D, YYYY"
                  )}
                </span>
                <p>{snippet?.description?.slice(0, 300) + "..."}</p>
              </div>
            </div>

            <div className="watch-l-comment">
              <div>
                <h2>{statistics?.commentCount + " Comments"}</h2>
              </div>
              <Comment />
            </div>
          </div>
        </div>

        <div className="watch-r">
          {suggestedData?.items?.map((item) => (
            <Card2 item={item} key={item.id.videoId || item.id.playlistId} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div className="watch">{loading}</div>;
  }
}

export default Watch;
