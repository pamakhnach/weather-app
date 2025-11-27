import profileArrow from '../assets/profileArrow.svg';
import imgProfile from '../assets/imgProfile.svg';

import DarkModeToggle from '../section/DarkModeToggle.jsx';
import SearchInput from '../section/SearchInput.jsx';

function Header() {
  return (
    <div className="flex flex-nowrap content-center justify-between pt-[24px] ml-[24px]">
      <div>
        <div>
          <p>Hi, Pavel</p>
        </div>
        <div className="font-semibold text-2xl">
          <p>Good morning</p>
        </div>
      </div>
      <div className="flex flex-nowrap items-center">
        <SearchInput />
        <button className="ml-[16px] mr-[24px]">
          <DarkModeToggle />
        </button>
        <div className="mr-[24px]">
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
