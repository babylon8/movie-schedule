import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMovieContext } from '../context/MovieContext';

const TheaterSchedule = () => {
  const { cityId } = useParams();
  const { cities, getTheatersByCity, getSchedulesByTheater, getMovieById } = useMovieContext();
  const [theaters, setTheaters] = useState([]);
  const [cityName, setCityName] = useState('');
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    const city = cities.find(c => c.id === cityId);
    if (city) {
      setCityName(city.name);
      const theaterList = getTheatersByCity(cityId);
      setTheaters(theaterList);
      
      // Get schedules for each theater
      const schedules = theaterList.map(theater => {
        const theaterSchedules = getSchedulesByTheater(theater.id);
        return {
          theater,
          schedules: theaterSchedules.map(schedule => ({
            ...schedule,
            movie: getMovieById(schedule.movie_id)
          }))
        };
      });
      
      setScheduleData(schedules);
    }
  }, [cityId, cities, getTheatersByCity, getSchedulesByTheater, getMovieById]);

  if (!cityName) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Movie Schedules</h1>
      <p className="text-center text-gray-600 mb-8">in {cityName}</p>
      
      {scheduleData.map(({ theater, schedules }) => (
        <div key={theater.id} className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{theater.name}</h2>
          <p className="text-gray-600 mb-6">{theater.address}</p>
          
          {schedules.length > 0 ? (
            <div className="space-y-6">
              {schedules.map((schedule) => (
                <div key={schedule.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      {schedule.movie && schedule.movie.poster_path ? (
                        <img 
                          src={`https://image.tmdb.org/t/p/w200${schedule.movie.poster_path}`} 
                          alt={schedule.movie.title}
                          className="w-full max-w-[150px] rounded-md"
                        />
                      ) : (
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-32 max-w-[150px]" />
                      )}
                    </div>
                    
                    <div className="md:w-3/4 md:pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {schedule.movie ? schedule.movie.title : 'Unknown Movie'}
                          </h3>
                          {schedule.movie && (
                            <p className="text-gray-600 mt-1">
                              {schedule.movie.runtime} min | 
                              Rating: {schedule.movie.vote_average}
                            </p>
                          )}
                        </div>
                        
                        <div className="mt-2 md:mt-0">
                          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                            ${schedule.ticket_price}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-700 mb-2">Showtimes:</h4>
                        <div className="flex flex-wrap gap-2">
                          {schedule.showtimes.map((time, index) => (
                            <span 
                              key={index} 
                              className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded cursor-pointer transition-colors"
                            >
                              {time}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No schedules available for this theater.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TheaterSchedule;