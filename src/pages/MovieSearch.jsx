import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';
import { Link } from 'react-router-dom';

const MovieSearch = () => {
  const { searchQuery, searchMovies, states } = useMovieContext();
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchMovies(searchQuery);
      setSearchResults(results);
    }
  }, [searchQuery, searchMovies]);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Search Movies</h1>
      
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {searchResults.map((movie) => (
                <div 
                  key={movie.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img 
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                      alt={movie.title} 
                      className="w-full h-64 object-cover cursor-pointer"
                      onClick={() => handleMovieClick(movie.id)}
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {movie.vote_average}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-1 cursor-pointer" onClick={() => handleMovieClick(movie.id)}>
                      {movie.title}
                    </h2>
                    <p className="text-gray-600 mb-2">{movie.release_date.split('-')[0]}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {movie.runtime} min
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {movie.genre_ids.map(id => {
                          const genres = {
                            28: 'Action',
                            80: 'Crime',
                            18: 'Drama',
                            878: 'Sci-Fi',
                            12: 'Adventure',
                            35: 'Comedy',
                            99: 'Documentary',
                            16: 'Animation',
                            36: 'History',
                            27: 'Horror',
                            10402: 'Music',
                            9648: 'Mystery',
                            10749: 'Romance',
                            878: 'Science Fiction',
                            53: 'Thriller',
                            10752: 'War',
                            37: 'Western'
                          };
                          return genres[id] || `Genre ${id}`;
                        }).join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              {searchQuery.trim() ? (
                <div>
                  <p className="text-gray-600 mb-4">No movies found matching "{searchQuery}"</p>
                  <p className="text-gray-500">Try a different search term</p>
                </div>
              ) : (
                <div>
                  <p className="text-gray-600 mb-4">Search for movies by title</p>
                  <p className="text-gray-500">Type in the search box above to find movies</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;