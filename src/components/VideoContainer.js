import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import Videocard from './Videocard'

const VideoContainer = () => {
    const [videos,SetVideos]=useState([])

useEffect(()=>{
    getVideos()
},[])

const getVideos = async() =>{
    const data = await fetch(YOUTUBE_VIDEO_API)
    const results = await data.json();
   
    SetVideos(results.items)
}
 
  return (
    <div className="flex flex-wrap">
   {videos.map((video)=> (<Link to={"/watch?v="+ video.id}> <Videocard key={video.id} info={video}/> </Link> ))}
    </div>
  )
}

export default VideoContainer
