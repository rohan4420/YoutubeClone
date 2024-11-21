// src/App.js

import React from 'react';
import VideoCard from './components/VideoCard';

function App() {
  return (
    <div>
      <VideoCard
        title={"How to learn coding in 30 days | 30 daya plan | Code with me "}
        image={"photo.png"}
        thumbnail={"thumbnail.jpg"}
        author={"Rohan Roy"}
        views={"46m"}
        timestamp={"2 days to go"}
      />
    </div>
  );
}

export default App;
