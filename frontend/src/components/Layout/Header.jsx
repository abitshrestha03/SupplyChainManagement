import SearchIcon from "../../assets/icons/SearchIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import BellIcon from "../../assets/icons/BellIcon";
import ProfilePhoto from "../../assets/images/Ellipse.png";
import ProfilePhoto1 from "../../assets/images/ProfilePhoto1.png";
import { useState } from "react";
const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <header className="fixed top-0 right-0 left-72 flex items-center justify-between py-4 px-6 bg-white">
      <h1 className="text-3xl font-medium">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="header-icons flex gap-2">
          <div className="bg-white shadow p-1 rounded">
            <SearchIcon />
          </div>
          <div className="bg-white shadow p-1 rounded">
            <SettingsIcon />
          </div>
          <div className="bg-white shadow p-1 rounded">
            <BellIcon />
          </div>
        </div>
        <div className="border-l border-black h-8 mx-4"></div>
        <div className="text-black font-medium">Abit Shrestha</div>

        <img
          src={ProfilePhoto}
          alt="profilephoto"
          className="w-[37px] h-[37px] rounded-full object-cover cursor-pointer"
          onClick={togglePopup}
        />
        <svg
          width="13"
          height="10"
          viewBox="0 0 13 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
          onClick={togglePopup}
        >
          <path d="M6.29032 10L0 0H13L6.29032 10Z" fill="#26A5FF" />
        </svg>
      </div>
      {/* Profile Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white shadow-lg rounded-lg p-6 w-[529px] relative">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-black font-normal rounded-full px-1 py-1 hover:text-gray-700 bg-white shadow-lg text-3xl w-10 h-10"
            >
              &times;
            </button>

            <div className="flex items-center space-x-4 mb-4">
              <img
                src={ProfilePhoto1}
                alt="Profile"
                className="rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl mb-1 font-semibold">Abit Shrestha</h2>
                <p className="text-gray-500 text-xs">
                  abitshrestha03@gmail.com
                </p>
              </div>
            </div>
            <form className="space-y-4 pt-4">
              <div className="flex space-x-4 items-center justify-between">
                <label className="block text-black font-medium text-xs">
                  Name
                </label>
                <div className="flex gap-2">
                  <div>
                    <input
                      type="text"
                      value="Abit"
                      className="border border-gray-300 rounded py-2 w-[169px] ps-2 text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value="Shrestha"
                      className="border border-gray-300 rounded py-2 w-[160px] ps-2 text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <label className="block text-black font-medium text-xs">
                  Email
                </label>
                <input
                  type="email"
                  value="abitshrestha03@gmail.com"
                  className="w-[338px] border border-gray-300 rounded ps-2 py-2 text-sm"
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="block text-black font-medium text-xs">
                  Username
                </label>
                <input
                  type="text"
                  value="abitshrestha11"
                  className="w-[338px] border border-gray-300 rounded ps-2 py-2 text-sm"
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="block font-medium text-xs">
                  Phone Number
                </label>
                <input
                  type="text"
                  value="9812345678"
                  className="w-[338px] border border-gray-300 rounded ps-2 py-2 text-sm"
                />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={togglePopup}
                  className="px-2 py-1 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-2 py-1 text-white bg-blue rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
