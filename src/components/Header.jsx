// import axios from 'axios';
import switchThemeIcon from '../assets/witchThemeIcon.svg';
import profileArrow from '../assets/profileArrow.svg';
import imgProfile from '../assets/imgProfile.svg';

function Header() {
  // const baseURL = 'http://api.weatherapi.com/v1';

  // axios
  //   .get(
  //     `${baseURL}/forecast.json?key=ba0db9de816d44c3a3a193448231112&q=London&days=1&aqi=no&alerts=no`,
  //   )
  //   .then(function (response) {});

  return (
    <div className="flex flex-nowrap justify-between">
      <div>
        <div>
          <p>Hi, Pavel</p>
        </div>
        <div className="font-semibold text-2xl">
          <p>Good morning</p>
        </div>
      </div>
      <div className="flex flex-nowrap">
        <div>
          <input type="text" />
        </div>
        <div>
          <button>
            <img src={switchThemeIcon} alt="switch theme" />
          </button>
        </div>
        <div>
          <button className="flex flex-nowrap">
            <img src={imgProfile} />
            <img src={profileArrow} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
