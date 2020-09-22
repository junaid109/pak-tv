import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Header></Header>

      <Switch>
      <Route path="/search/:searchTerm">
      <div className="app_page">

        <Sidebar> </Sidebar>
        <SearchPage></SearchPage>
      </div>
        </Route>
      <Route path="/">
        <h1>Home page</h1>
        <h1>Welcome to Pak-Tube </h1>
      <Sidebar> </Sidebar>
      <RecommendedVideos></RecommendedVideos>
    </Route>
      <Route path="/search"><h1>Search page</h1> </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
