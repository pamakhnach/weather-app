import { useState, useEffect } from 'react';

import { weatherApi } from '../api/weatherApi.js';

import locationImage from '../assets/location.svg';
import profileArrow from '../assets/profileArrow.svg';

function UserLocationWeather() {
  const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    weatherApi
      .getCityWeather('London')
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.error('Server Error:', error.response.status);
          setError('Server error: ' + error.response.status);
        } else if (error.request) {
          console.error('Network Error:', error.request);
          setError('Network error. Please check your connection.');
        } else {
          console.error('Error:', error.message);
          setError(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       'http://api.weatherapi.com/v1/forecast.json?key=ba0db9de816d44c3a3a193448231112&q=London&days=1&aqi=no&alerts=no',
  //     )
  //     .then(function (response) {
  //       setData(response.data);
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       if (error.response) {
  //         console.error('Server Error:', error.response.status);
  //         setError('Server error: ' + error.response.status);
  //       } else if (error.request) {
  //         console.error('Network Error:', error.request);
  //         setError('Network error. Please check your connection.');
  //       } else {
  //         console.error('Error:', error.message);
  //         setError(error.message);
  //       }
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data && (
        <div className="flex  bg-dark-black rounded-xl p-[24px] justify-between">
          <div>
            <div className="flex bg-regal-black rounded-lg py-[9px] px-[16px]">
              <img src={locationImage} />
              <p className="ps-[8px]">
                {data.location.name}, {data.location.country}
              </p>
            </div>
            <div className="text-4xl font-medium pt-[8px]">
              <p>{weekdays[data.current.is_day]}</p>
            </div>
            <div className=" flex  justify-center items-center">
              <img
                className="w-[150px] h-[150px] "
                src={data.current.condition.icon}
              />
            </div>
          </div>

          <div>
            <button className="flex mb-[54px] bg-regal-black rounded-lg p-[8px]">
              °C
              <img src={profileArrow} />
            </button>
            <p className="font-medium text-4xl mb-[74px]">
              {Math.round(data.current.temp_c)}°C
            </p>
            <p className="font-medium text-xl ">
              {data.current.condition.text}
            </p>
            <p className="text-base">
              Feels like {Math.round(data.current.feelslike_c)}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default UserLocationWeather;
