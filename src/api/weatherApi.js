import api from './axiosConfig';

export const weatherApi = {
  getCityWeather: (cityName) => {
    return api.get(
      `forecast.json?key=ba0db9de816d44c3a3a193448231112&q=${cityName}&days=1&aqi=no&alerts=no`,
    );
  },

  getAstronomy: (cityName) => {
    return api.get(
      `astronomy.json?key=ba0db9de816d44c3a3a193448231112&q=${cityName}`,
    );
  },

  getForecast: (cityName) => {
    return api.get(
      `forecast.json?key=ba0db9de816d44c3a3a193448231112&q=${cityName}&days=3&aqi=no&alerts=no`,
    );
  },

  deleteCityWeather: (cityName) => {
    return api.delete(`${cityName}`);
  },
};
