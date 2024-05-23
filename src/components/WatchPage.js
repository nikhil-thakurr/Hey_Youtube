import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleOff } from "./utils/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import Livechat from "./Livechat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  // console.log(searchParams.get('v'));

  useEffect(() => {
    dispatch(toggleOff());
  }, []);

  return (
    <div className="w-full">
      <div className="ml-2 p-2 flex w-full">
        <div className="">
          <iframe
            width="1150"
            height="600"
            src="https://www.youtube.com/embed/T94PHkuydcw?si=kC47t0Fvx34kd0mp"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Comments />
        </div>
        <div className="w-full">
          <Livechat />
        </div>
      </div>
     
        
    </div>
  );
};

export default WatchPage;
