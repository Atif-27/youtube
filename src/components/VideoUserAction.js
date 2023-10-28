import React from "react";
import SubcribeButton from "./SubcribeButton";
import LikeButton from "./LikeButton";
const VideoUserAction = ({ id, channelId }) => {
  return (
    <div className="flex justify-between items-center">
      <SubcribeButton id={channelId} />
      <LikeButton id={id} />
    </div>
  );
};

export default VideoUserAction;
