// src/App.js

import React from 'react';
import VideoCard from './components/VideoCard';
import VideoGrid from './components/VideoGrid';
import AppBar from './components/AppBar';

function App() {
  return (
    <div>
      <AppBar/>
    <VideoGrid/>
    </div>
  );
}

export default App;
