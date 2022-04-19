import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './containers/Header'
import ArtworkList from './containers/ArtworkList'
import ArtworkDetails from './containers/ArtworkDetails'
import Favourites from './containers/Favourites'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ArtworkList/>} />
          <Route path="/item/:itemId" element={<ArtworkDetails/>} />
          <Route path="/favourites" element={<Favourites/>} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
