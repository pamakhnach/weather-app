import axios from 'axios';
import { useState, useEffect } from 'react';

function OtherCountriesWeather() {
  const [data_first, setData_first] = useState();
  const [data_second, setData_second] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        'http://api.weatherapi.com/v1/forecast.json?key=ba0db9de816d44c3a3a193448231112&q=Canberra&days=1&aqi=no&alerts=no',
      )
      .then(function (response) {
        setData_first(response.data);
        console.log(response);
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

  useEffect(() => {
    axios
      .get(
        'http://api.weatherapi.com/v1/forecast.json?key=ba0db9de816d44c3a3a193448231112&q=Tokyo&days=1&aqi=no&alerts=no',
      )
      .then(function (response) {
        setData_second(response.data);
        console.log(response);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex flex-col  bg-dark-black dark:bg-sky-200 rounded-xl p-[24px]">
        <div className="font-semibold text-2xl mb-[24px]">
          <h1>Other Countries</h1>
        </div>
        <div className="flex bg-dark-grey dark:bg-blue-300 rounded-xl p-[24px] mb-[18px] justify-between">
          <div>
            <p className="text-sm font-regular">
              {data_first.location.country}
            </p>
            <p className="font-regular text-2xl">{data_first.location.name}</p>
            <p className="text-sm font-medium">
              {data_first.current.condition.text}
            </p>
          </div>
          <div className="content-center">
            <img
              className="w-[72px] h-[72px]"
              src={data_first.current.condition.icon}
            />
          </div>
          <div className="content-center font-semibold text-2xl">
            <p>{Math.round(data_first.current.temp_c)}°</p>
          </div>
        </div>
        <div className="flex bg-dark-grey dark:bg-blue-300 rounded-xl p-[24px] justify-between">
          <div>
            <p className="text-sm font-regular">
              {data_second.location.country}
            </p>
            <p className="font-regular text-2xl">{data_second.location.name}</p>
            <p className="text-sm font-medium">
              {data_second.current.condition.text}
            </p>
          </div>
          <div className="content-center">
            <img
              className="w-[72px] h-[72px]"
              src={data_second.current.condition.icon}
            />
          </div>
          <div className="content-center font-semibold text-2xl">
            <p>{Math.round(data_second.current.temp_c)}°</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherCountriesWeather;
