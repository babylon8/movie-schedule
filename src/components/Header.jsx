import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';

const Header = () => {
  const { searchQuery, setSearchQuery } = useMovieContext();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/search');
    }
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
              Movie Schedule App
            </Link>
          </div>
          
          <form onSubmit={handleSearch} className="mt-4 md:mt-0 md:w-1/3">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for movies..."
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
          
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-blue-200 transition-colors">
                  Browse by Location
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;