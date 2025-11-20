import { useState, useEffect } from 'react';

import { weatherApi } from '../api/weatherApi.js';

function Forecast() {
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    weatherApi
      .getForecast('London')
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data.forecast.forecastday);

  return (
    <>
      {data && (
        <div className="bg-dark-black dark:bg-sky-200 rounded-xl p-[24px]">
          <div>
            <p className="mb-4 font-semibold text-2xl">3 Day Forecast</p>
          </div>
          <div className="flex gap-6 ">
            {data.forecast.forecastday.map((forecast, index) => (
              <div
                key={forecast.date}
                className="bg-dark-grey dark:bg-blue-300 rounded-lg flex flex-col items-center justify-between h-[170px] p-[16px]"
              >
                <div className="border-hidden border-white text-sm text-medium">
                  {index == 0 && <p>Today</p>}
                  {index > 0 && weekdays[forecast.hour[0].is_day + index]}
                </div>
                <div>
                  <img src={forecast.day.condition.icon} />
                </div>
                <div>
                  <p className="text-lg text-medium">
                    {Math.round(forecast.day.avgtemp_c)}°C
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Forecast;
