import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StateSelection from './pages/StateSelection';
import CitySelection from './pages/CitySelection';
import TheaterSchedule from './pages/TheaterSchedule';
import MovieDetails from './pages/MovieDetails';
import MovieSearch from './pages/MovieSearch';
import { MovieProvider } from './context/MovieContext';
import './App.css';

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<StateSelection />} />
              <Route path="/cities/:stateId" element={<CitySelection />} />
              <Route path="/theaters/:cityId" element={<TheaterSchedule />} />
              <Route path="/movie/:movieId" element={<MovieDetails />} />
              <Route path="/search" element={<MovieSearch />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;