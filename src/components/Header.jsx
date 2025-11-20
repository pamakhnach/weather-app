import switchThemeIcon from '../assets/witchThemeIcon.svg';
import profileArrow from '../assets/profileArrow.svg';
import imgProfile from '../assets/imgProfile.svg';

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
