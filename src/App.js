import './Global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './containers/Header/Header'
import ArtworkList from './pages/ArtworkList/ArtworkList'
import ArtworkDetails from './pages/ArtworkDetails/ArtworkDetails'
import Favourites from './pages/Favourites/Favourites'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import React, {useState} from 'react'

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header setIsLoaded={setIsLoaded}/>
        <Routes>
          <Route path="/" element={<ArtworkList error={error} setError={setError} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>} />
          <Route path="/item/:itemId" element={<ArtworkDetails error={error} setError={setError} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
