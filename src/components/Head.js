import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery,SetSearchQuery] = useState("")
  const[suggestions,setSuggestions] = useState([])

  useEffect(()=>{

    const timer =setTimeout(()=>getSearchSuggestions(),200)

    return ()=>{
      clearTimeout(timer)
    }
  },[searchQuery])

  

  const toggler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions= async()=>{
    const data = await fetch("http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=" + searchQuery )
    const json = await data.json();
    
    setSuggestions(json[1])
    }

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1 h-8">
        <img
          className="cursor-pointer"
          onClick={() => toggler()}
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=webp&w=512"
          alt="text"
        />
        <img alt="logo"
          className="mx-3"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        />
      </div>
      <div className="col-span-10 h-8   ">
        <div>
        <input 
          value={searchQuery}
          onChange={(e)=>SetSearchQuery(e.target.value)}
          className="w-1/2 border border-gray-400 rounded-l-full p-1 px-5 "
          type="text"
        />
        <button className="border boder-gray-400 rounded-r-full px-2 py-1 bg-gray-100">
          🔍
        </button>
        </div>
        <div className="fixed bg-white py-3 px-5 w-[29.5rem] shadow-lg rounded-lg border border-gray-400 ">
        <ul>
          {suggestions.map((s,index)=><li key={index} className="hover:bg-slate-200">🔍 {s}</li>)}
        </ul>
        </div>
      </div>
      <div>
        <img alt="user"
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        />
      </div>
    </div>
  );
};

export default Head;
