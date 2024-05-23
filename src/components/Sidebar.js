import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen =useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen)return null;
  return (
    <div className='w-48 shadow-lg p-4'>
<h1 > <Link to="/">Home</Link></h1>
<h1 >Shorts</h1>
<h1 >Video</h1>
<h1 >Live</h1>
<h1 className='font-bold py-2'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>News</li>
        <li>Gaming</li>
        <li>Entertianment</li>

      </ul>

      <h1 className='font-bold py-2'>You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>PlayLists</li>
        <li>Your Videos</li>
        <li>Watch Later</li>

      </ul>
    </div>
  )
}

export default Sidebar