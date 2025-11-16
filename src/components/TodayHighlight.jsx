import { useState, useEffect } from 'react';

import { weatherApi } from '../api/weatherApi.js';

import wind from '../assets/wind.svg';
import humidity from '../assets/humidity.svg';
import sunrise from '../assets/sunrise.svg';
import uvIndex from '../assets/uvIndex.svg';
import visibility from '../assets/visibility.svg';
import sunset from '../assets/sunset.svg';

function TodayHighlight() {
  const [astronomy, setastronomy] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const indexUV = 
  0 < data.current.uv < 2 ? "Low UV" :
  3 < data.current.uv < 5 ? "Moderate UV" :
  6 < data.current.uv < 7 ? "High UV" :
  8 < data.current.uv < 10 ? "Very high UV" :
  data.current.uv > 11 ? "Extreme UV" ;
  useEffect(() => {
    weatherApi
      .getCityWeather('London')
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setError('Server error: ' + error.response.status);
        } else if (error.request) {
          setError('Network error. Please check your connection.');
        } else {
          setError(error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    weatherApi
      .getAstronomy('London')
      .then((response) => {
        setastronomy(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          setError('Server error: ' + error.response.status);
        } else if (error.request) {
          setError('Network error. Please check your connection.');
        } else {
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
  console.log(data.current.localtime_epoch);
  let date = new Date(data.current.last_updated_epoch * 1000);

  return (
    <div className="bg-dark-black rounded-xl p-[24px]">
      <p className="mb-4 font-semibold text-2xl">Today's Highlight</p>
      <div className="flex gap-4">
        <div className="p-[16px] bg-dark-grey rounded-lg">
          <div className="flex justify-end mb-4">
            <img src={wind} />
            <p className="pl-[3px] font-medium">Wind Status</p>
          </div>
          <div className="text-end mb-4">
            <p className="font-semibold text-2xl">
              {data.current.wind_kph} km/h
            </p>
          </div>
          <div>
            <p className="text-end">
              {date.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>
        </div>
        <div className="p-[16px] bg-dark-grey rounded-lg">
          <div className="flex justify-end mb-4">
            <img src={humidity} />
            <p className="pl-[3px] font-medium">Humidity</p>
          </div>
          <div>
            <p className="text-end mb-4 font-semibold text-2xl">
              {data.current.humidity} %
            </p>
          </div>
          <div>
            <p className="text-end">
              {(60 < data.current.humidity) & (data.current.humidity < 80)
                ? 'Humidity is good'
                : 'Humidity is bad'}
            </p>
          </div>
        </div>
        <div className="p-[16px] w-[267px] flex justify-between bg-dark-grey rounded-lg items-center">
          <div className=" w-[64px] h-[64px] ">
            <img src={sunrise} />
          </div>
          <div>
            <p>Sunrise</p>
            <p className="font-semibold text-2xl">
              {astronomy.astronomy.astro.sunrise}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <div className="p-[16px] bg-dark-grey rounded-lg">
          <div className="flex justify-end mb-4">
            <img src={uvIndex} />
            <p className="pl-[3px] font-medium">UV Index</p>
          </div>
          <div className="text-end mb-4">
            <p className="font-semibold text-2xl">{data.current.uv} UV</p>
          </div>
          <div>
            <p className="text-end">
              {(0 < data.current.uv) & (data.current.uv < 2) ? "Low UV" :
  (3 < data.current.uv) & (data.current.uv < 5) ? "Moderate UV" :
  (6 < data.current.uv)  & (data.current.uv < 7) ? "High UV" :
  (8 < data.current.uv) & (data.current.uv < 10) ? "Very high UV" :
  (data.current.uv > 11) ? "Extreme UV"}
            </p>
          </div>
        </div>
        <div className="p-[16px] bg-dark-grey rounded-lg ">
          <div className="flex justify-end mb-4">
            <img src={visibility} />
            <p className="pl-[3px] font-medium">Visibility</p>
          </div>
          <div>
            <p className="text-end mb-4 font-semibold text-2xl">
              {data.current.vis_km} km
            </p>
          </div>
          <div>
            <p className="text-end">
              {date.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>
        </div>
        <div className="p-[16px] w-[267px] flex justify-between bg-dark-grey rounded-lg items-center">
          <div className=" w-[64px] h-[64px] ">
            <img src={sunset} />
          </div>
          <div>
            <p>Sunset</p>
            <p className="font-semibold text-2xl">
              {astronomy.astronomy.astro.sunset}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayHighlight;
