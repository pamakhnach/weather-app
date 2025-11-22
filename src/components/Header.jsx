import profileArrow from '../assets/profileArrow.svg';
import imgProfile from '../assets/imgProfile.svg';

import DarkModeToggle from '../section/DarkModeToggle.jsx';

function Header() {
  return (
    <div className="flex flex-nowrap justify-between">
      <div>
        <div>
          <p>Hi, Pavel</p>
        </div>
        <div className="font-semibold text-2xl dark:bg-red-100">
          <p>Good morning</p>
        </div>
      </div>
      <div className="flex flex-nowrap">
        <div>
          <input type="text" />
        </div>
        <div>
          <button>
            <DarkModeToggle />
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
