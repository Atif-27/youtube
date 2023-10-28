import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState();
  useEffect(function () {
    async function getVideos() {
      const res = await fetch(YOUTUBE_VIDEO_API);
      const data = await res.json();
      setVideos(data.items);
    }
    getVideos();
  }, []);
  if (!videos) return;
  return (
    <div className="m-5 flex flex-wrap space-x-2 space-y-2 justify-center">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
