import React from 'react';
import { Link } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';

const StateSelection = () => {
  const { states } = useMovieContext();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Select a State</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {states.map((state) => (
          <Link
            key={state.id}
            to={`/cities/${state.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-300"
          >
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800">{state.name}</h2>
              <p className="text-gray-600 mt-2">{state.abbreviation}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StateSelection;