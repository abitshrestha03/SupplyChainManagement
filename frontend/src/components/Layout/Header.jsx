import SearchIcon from "../../assets/icons/SearchIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import BellIcon from "../../assets/icons/BellIcon";
import ProfilePhoto from "../../assets/images/Ellipse.png";
import { useState } from "react";
const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white">
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
          <div className="bg-white shadow-lg rounded-lg p-6 w-96 relative">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={ProfilePhoto}
                alt="Profile"
                className="rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">Abhishek Dangol</h2>
                <p className="text-gray-500">abhidangol11@gmail.com</p>
              </div>
              <button
                onClick={togglePopup}
                className="mt-[-50px] text-black font-normal rounded-full px-1 py-1 hover:text-gray-700 bg-white shadow-lg text-3xl w-10 h-10 flex items-center justify-center"
              >
                &times;
              </button>
            </div>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <div>
                  <label className="block text-gray-600">Name</label>
                  <input
                    type="text"
                    value="Abhishek"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Surname</label>
                  <input
                    type="text"
                    value="Dangol"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600">Email Address</label>
                <input
                  type="email"
                  value="abhidangol11@gmail.com"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-600">Username</label>
                <input
                  type="text"
                  value="abhidangol11"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-600">Phone Number</label>
                <input
                  type="text"
                  value="9812345678"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={togglePopup}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
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
