import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos,onVideoSelect}) => {
  const items = videos.map((v)=> {
    return <VideoListItem
              key={v.etag}
              video={v}
              onVideoSelect={onVideoSelect}/>
  });
  return (
    <ul className="col-md-4 list-group">
    {items}
    </ul>
  );
}

export default VideoList;
