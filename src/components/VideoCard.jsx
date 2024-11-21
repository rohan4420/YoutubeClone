// src/App.js

import React from "react";

function VideoCard(props) {
  return (
    <div>
      <img className="rounded-xl" src={props.image}  alt="" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img className="rounded-full w-20 h-20" src={props.thumbnail} alt="" />
        </div>
        <div className="col-span-11 pl-4">
          <div>{props.title}</div>
          <div className="col-span-10 text-gray-500 text-base">
            {props.author}
          </div>
          <div className="col-span-10 text-gray-500 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
