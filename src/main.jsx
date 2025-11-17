import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from '../src/components/Header.jsx';
import UseLocationWeather from '../src/components/UserLocationWeather.jsx';
import OtherCountriesWeather from '../src/components/OtherCountriesWeather.jsx';
import TodayHighlight from '../src/components/TodayHighlight.jsx';
import Forecast from '../src/components/Forecast.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <div className="flex">
      <div>
        <div className="w-[556px] mt-[24px] ml-[24px]">
          <UseLocationWeather />
        </div>
        <div className="w-[556px] m-[24px]">
          <OtherCountriesWeather />
        </div>
      </div>
      <div className="w-screen mr-[44px]">
        <div><TodayHighlight /></div>
        <div>
        <Forecast/>
      </div>
      </div>
      
    </div>
  </>,
);
