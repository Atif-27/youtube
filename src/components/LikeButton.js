import React from "react";
import { AiOutlineLike, AiFillLike, AiOutlineDislike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { dislike, like } from "../utils/userActionSlice";
const LikeButton = ({ id }) => {
  const dispatch = useDispatch();
  const likeList = useSelector((store) => store.userAction.likeVideos);
  const isLike = likeList.includes(id);

  function onLike() {
    dispatch(like(id));
  }
  function onDislike() {
    dispatch(dislike(id));
  }
  return (
    <div className=" mr-7 space-x-20 ">
      {isLike ? (
        <button onClick={onDislike}>
          <AiFillLike size={32} />
          Remove like
        </button>
      ) : (
        <button onClick={onLike}>
          <AiOutlineLike size={32} />
          Like
        </button>
      )}
      <button onClick={onDislike}>
        <AiOutlineDislike size={32} />
        Dislike
      </button>
    </div>
  );
};

export default LikeButton;
