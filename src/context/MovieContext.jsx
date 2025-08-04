import React, { createContext, useContext, useState, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [theaters, setTheaters] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Load mock data
  useEffect(() => {
    const loadData = async () => {
      try {
        const statesData = await fetch('/data/states.json').then(res => res.json());
        const citiesData = await fetch('/data/cities.json').then(res => res.json());
        const theatersData = await fetch('/data/theaters.json').then(res => res.json());
        const schedulesData = await fetch('/data/schedules.json').then(res => res.json());
        const moviesData = await fetch('/data/movies.json').then(res => res.json());
        
        setStates(statesData);
        setCities(citiesData);
        setTheaters(theatersData);
        setSchedules(schedulesData);
        setMovies(moviesData);
      } catch (error) {
        console.error('Error loading mock data:', error);
      }
    };

    loadData();
  }, []);

  // Filter cities by state
  const getCitiesByState = (stateId) => {
    return cities.filter(city => city.state_id === stateId);
  };

  // Filter theaters by city
  const getTheatersByCity = (cityId) => {
    return theaters.filter(theater => theater.city_id === cityId);
  };

  // Get schedules by theater
  const getSchedulesByTheater = (theaterId) => {
    return schedules.filter(schedule => schedule.theater_id === theaterId);
  };

  // Get movie by ID
  const getMovieById = (movieId) => {
    return movies.find(movie => movie.id === movieId);
  };

  // Search movies by title
  const searchMovies = (query) => {
    if (!query) return [];
    return movies.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const value = {
    states,
    cities,
    theaters,
    schedules,
    movies,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    selectedTheater,
    setSelectedTheater,
    selectedMovie,
    setSelectedMovie,
    searchQuery,
    setSearchQuery,
    getCitiesByState,
    getTheatersByCity,
    getSchedulesByTheater,
    getMovieById,
    searchMovies
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};