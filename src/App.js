import './Global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './containers/Header/Header'
import ArtworkList from './containers/ArtworkList/ArtworkList'
import ArtworkDetails from './containers/ArtworkDetails/ArtworkDetails'
import Favourites from './containers/Favourites/Favourites'
import React from 'react'

function App() {

  return (
    <div className="App">
      <Router>
        <Header  />
        <Routes>
          <Route path="/" element={<ArtworkList />} />
          <Route path="/item/:itemId" element={<ArtworkDetails />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
