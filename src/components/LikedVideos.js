import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { VIDEO_LIST_API } from "../utils/constants";
const LikedVideos = () => {
  const likedList = useSelector((state) => state.userAction.likeVideos);
  const commaSeparatedList = likedList.join(",");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchLikedVideos() {
      const data = await fetch(VIDEO_LIST_API + commaSeparatedList);
      const res = await data.json();
      setVideos(res.items);
    }
    fetchLikedVideos();
  }, [commaSeparatedList]);

  return (
    <div className="flex flex-col m-5 ">
      <div className="text-4xl pb-10">
        Your <span className="text-red-600 font-semibold">Liked </span>Videos
      </div>
      <div className="flex flex-wrap space-x-2 space-y-2 justify-center">
        {videos.length > 0 ? (
          videos.map((video) => (
            <Link to={`/watch?v=${video.id}`} key={video.id}>
              <VideoCard key={video.id} info={video} />
            </Link>
          ))
        ) : (
          <div className="text-xl font-bold text-red-600">
            You dont have any liked videos
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedVideos;
