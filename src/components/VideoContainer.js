import React, { useState } from "react";
import { useEffect } from "react";
import { API_URL } from "./utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(API_URL);
    const JSON = await data.json();
    // console.log(JSON.items);
    setVideo(JSON.items);
    
  };

  return (
    <div className="flex flex-wrap">
    {video.map((video)=> <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video} /></Link>  )}
      
    </div>
  );
};

export default VideoContainer;
