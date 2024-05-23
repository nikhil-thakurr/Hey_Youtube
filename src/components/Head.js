import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";

const Head = () => {
  const [searchQuery,setsearchQuery] =useState("");
  const [suggestions,setsuggetions] =useState([]);
  const [showSuggestion,setshowsuggestions]=useState(false);
  const searchCache=useSelector((store)=>store.search);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if( searchCache[searchQuery]){
        setsuggetions( searchCache[searchQuery]);
      }
      else{

        getSearchSuggestions();
      }
    },200);

    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])

  const getSearchSuggestions=async()=>{

    const data=await fetch (YOUTUBE_SEARCH_API + searchQuery);
    // console.log(searchQuery)
    const json =await data.json();
    // console.log(json);
    setsuggetions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  }

  return (
    <div className="grid grid-flow-col shadow-lg p-5  sticky top-0  bg-white">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={handleToggle}
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt=""
        />

        <img
          className="h-8 px-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/640px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
      </div>

      <div className="col-span-10 px-20">
        <input
          className="w-1/2 border border-gray-400 py-2 px-5 rounded-l-full"
          type="text"
          name=""
          id=""
          placeholder="Search"
          value={searchQuery}
          onChange={(e)=>setsearchQuery(e.target.value)}
          onFocus={()=>setshowsuggestions(true)}
          onBlur={()=>setshowsuggestions(false)}
        />
        <button className=" w-16 bg-slate-200 border border-gray-400 p-2 rounded-r-full">
          🔍{" "}
        </button>
        <div className="fixed shadow-lg rounded-lg px-3 m-2 bg-white w-[34rem]">

          { showSuggestion && <ul >
            {suggestions.map((suggestion)=> (<li key={suggestion} className="py-2 px-2 hover:bg-gray-100">{suggestion}</li>))}
         
          </ul>}
          </div>
      </div>

      <div className="col-span-1 ">
        <img
          className="h-10 "
          src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
