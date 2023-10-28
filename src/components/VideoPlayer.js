const VideoPlayer = ({ id }) => {
  return (
    <iframe
      width="100%"
      height="650"
      src={`https://www.youtube.com/embed/${id} `}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className=" rounded-xl"
      title={id}
    />
  );
};

export default VideoPlayer;
