import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    if(info===undefined)return null;
    const {snippet}=info;
  return (
    <div  className='p-2 m-2 w-64 rounded-lg shadow-lg h-72 hover:bg-gray-200'>
        <img src={snippet.thumbnails.medium.url} alt="image" />
        <ul>
        <li className='font-bold py-2'>{info.snippet.channelTitle}</li>
          <li>{info.snippet.title}</li>
        </ul>
    </div>
  )
}

export default VideoCard