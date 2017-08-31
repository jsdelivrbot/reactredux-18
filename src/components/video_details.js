import React from 'react';

const VideoDetail = ({video}) => {   // video=props.video
  if (!video) {
    return <div> Loading ...</div>;
  }
  console.log("in Vdieo details" , video)
  const vid = video.id.videoId;
  const url = `https://www.youtube.com/embed/${vid}`;
  console.log (url);
  console.log ()
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}> </iframe>
      </div>
      <div className="details">
        <div> {video.snippet.title} </div>
        <div> {video.snippet.description} </div>
      </div>
    </div>
  );
};

export default VideoDetail
