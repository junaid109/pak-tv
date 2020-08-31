import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Welcome to Pak-Tube </h1>

    <Header> </Header>
    <div className="app_page">
    <Sidebar> </Sidebar>
    <RecommendedVideos></RecommendedVideos>
    </div>
    </div>
  );
}

export default App;
