import React from "react";
import VideoCard from "./VideoCard";

const videos = [
  {
    title: "How to learn coding in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn dancing in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn gaming in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn gaming in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn gaming in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn gaming in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn gaming in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn gaming in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn gaming in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn gaming in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn gaming in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn gaming in 30 days | 30 daya plan | Code with me ",
    image: "photo.png",
    thumbnail: "thumbnail.jpg",
    author: "Rohan Roy",
    views: "46m",
    timestamp: "2 days to go",
  },
];
const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {videos.map((video) => (
        <div>s
            <VideoCard
          title=
          {video.title}
          image={video.image}
          thumbnail={video.thumbnail}
          author={video.author}
          views={video.views}
          timestamp={video.timestamp}>
          </VideoCard>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
