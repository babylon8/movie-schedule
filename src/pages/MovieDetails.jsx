import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { getMovieById } = useMovieContext();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieData = getMovieById(movieId);
    if (movieData) {
      setMovie(movieData);
    }
  }, [movieId, getMovieById]);

  if (!movie) {
    return <div className="text-center py-8">Movie not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Home
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            {movie.poster_path ? (
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            )}
          </div>
          
          <div className="md:w-2/3 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{movie.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                Rating: {movie.vote_average}
              </span>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {movie.runtime} min
              </span>
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {movie.release_date}
              </span>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{movie.overview}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Find Showtimes
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;