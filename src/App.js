import './Global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './containers/Header/Header'
import ArtworkList from './containers/ArtworkList/ArtworkList'
import ArtworkDetails from './containers/ArtworkDetails/ArtworkDetails'
import Favourites from './containers/Favourites/Favourites'
import React, { useState } from 'react'

function App() {

  const [favourites, setFavourites] = useState([])
  const [input, setInput] = useState("")
  const [query, setQuery] = useState([])
  
  return (
    <div className="App">
      <Router>
        <Header query={query} setQuery={setQuery} input={input} setInput={setInput} />
        <Routes>
          <Route path="/" element={<ArtworkList favourites={favourites}
            setFavourites={setFavourites} query={query} setQuery={setQuery}
            input={input} setInput={setInput} />} />
          <Route path="/item/:itemId" element={<ArtworkDetails />} />
          <Route path="/favourites" element={<Favourites favourites={favourites} setFavourites={setFavourites} />} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
