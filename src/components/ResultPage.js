import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { VIDEO_SEARCH_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const ResultPage = () => {
  const [searchParms, setSeachParams] = useSearchParams();
  const searchQuery = searchParms.get("search_query");
  const [searchVideo, setSearchVideo] = useState([]);
  useEffect(() => {}, [searchParms]);
  useEffect(() => {
    async function fetchSearchVideo() {
      const res = await fetch(VIDEO_SEARCH_API + searchQuery);
      const data = await res.json();
      setSearchVideo(data.items);
    }
    fetchSearchVideo();
  }, [searchQuery]);
  return (
    <div className="flex flex-wrap m-5 space-x-2 space-y-2 justify-center">
      {searchVideo &&
        searchVideo.map((video) => (
          <Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
            <VideoCard info={video} />
          </Link>
        ))}{" "}
    </div>
  );
};

export default ResultPage;
