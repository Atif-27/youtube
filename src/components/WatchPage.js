import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_ID_API } from "../utils/constants";
import VideoPlayer from "./VideoPlayer";
import VideoUserAction from "./VideoUserAction";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  let id = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
    async function fetchVideoInfo() {
      const res = await fetch(VIDEO_ID_API + id);
      const data = await res.json();
      console.log(data.items[0]);
      setVideoInfo(data.items[0]);
    }
    fetchVideoInfo();
  }, []);
  return (
    <div className="md:px-20 px-2 py-5 w-full">
      <div className="xl:w-[70%] w-[99%]">
        <VideoPlayer id={id} />

        {videoInfo && (
          <div className="mt-3">
            <div>
              <h1 className="text-lg font-semibold">
                {videoInfo.snippet.title}
              </h1>
              <div className="text-md font-semibold">
                {videoInfo.snippet.channelTitle}
                <div>
                  <VideoUserAction
                    id={id}
                    channelId={videoInfo?.snippet.channelId}
                  />
                </div>
              </div>
            </div>
            <div className="text-md bg-gray-100 p-4 rounded-2xl my-4">
              <h1 className="font-bold">
                {videoInfo.statistics.viewCount} Views
              </h1>
              <p>{videoInfo.snippet.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
