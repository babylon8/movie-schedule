import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';

const CitySelection = () => {
  const { stateId } = useParams();
  const { states, getCitiesByState } = useMovieContext();
  const [cities, setCities] = useState([]);
  const [stateName, setStateName] = useState('');

  useEffect(() => {
    const state = states.find(s => s.id === stateId);
    if (state) {
      setStateName(state.name);
      setCities(getCitiesByState(stateId));
    }
  }, [stateId, states, getCitiesByState]);

  if (!stateName) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Select a City</h1>
      <p className="text-center text-gray-600 mb-8">in {stateName}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cities.map((city) => (
          <Link
            key={city.id}
            to={`/theaters/${city.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-300"
          >
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800">{city.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CitySelection;