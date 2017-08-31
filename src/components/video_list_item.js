import React from 'react';

const VideoListItem = ({video,onVideoSelect}) => {

  const v = video.snippet;
  const imageURL = v.thumbnails.default.url;
  //console.log (" I got item " , v);

  return (
    <li onClick = {() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL}/>
        </div>
        <div className="media-body">
          <div className="media-heading">
          </div>
        </div>
      </div>
    {v.title}

    </li>);
};

export default VideoListItem;
