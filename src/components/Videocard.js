import React from 'react'
import { Link } from 'react-router-dom';

const Videocard = ({info}) => {
   
    const {snippet, statistics}= info
    const {channelTitle, localized, thumbnails} = snippet
  return (
    <div className="p-2 m-2 w-52 shadow-lg">
      <img className="rounded-lg" alt="video" src={thumbnails.high.url}/>
      <ul >
          <li className="font-bold py-2">{localized.title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  )
}

export default Videocard
