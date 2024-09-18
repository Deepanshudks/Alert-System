import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import { NotificationButton } from './NotificationButton';

const Navbar = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [userName, setUserName] = useState("Deepanshu"); // Replace with actual username
  const userInitial = userName.charAt(0).toUpperCase();

  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  return (
    <>
      {!login ? (
        <nav className="shadow sticky top-0 z-50 bg-black">
          <div className="container px-2 h-16 text-white sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
            <div
              onClick={() => {
                navigate("/");
              }}
              className="flex flex-shrink-0 items-center"
            >
              <img className="h-8 w-auto invert" src={logo} alt="Arista" />
            </div>
            <div className="space-x-6">
              <a href="#contact" className="px-4 py-2 rounded hover:text-gray-400">Contact</a>
              <Link to="/userloginsignup" className="bg-zinc-500 px-4 py-2 rounded hover:bg-zinc-600 text-zinc-200 hover:text-gray-400">Join as public</Link>
              <Link to="/lawloginsignup" className="bg-zinc-500 px-4 py-2 rounded hover:bg-zinc-600 text-zinc-200 hover:text-gray-400">Join as law</Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="shadow sticky top-0 z-50 bg-black">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div
                  onClick={() => {
                    navigate("/");
                  }}
                  className="flex flex-shrink-0 items-center"
                >
                  <img className="h-8 w-auto invert" src={logo} alt="Arista" />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex space-x-4">
                  <Link to="/userdashboard" className="rounded-md px-3 py-2 text-base font-normal text-gray-200 hover:text-white" aria-current="page">Dashboard</Link>
                </div>
                <button onClick={()=>{
                    setLogin(false);
                    navigate("/")
                  }}  className="relative mx-2 p-2 text-white hover:text-white rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Logout</span>
                  Logout
                </button>
                <NotificationButton /> {/* Include NotificationButton here */}
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-sm text-white font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded={userMenuOpen}
                      aria-haspopup="true"
                      onClick={toggleUserMenu}
                    >
                      {userInitial}
                    </button>
                    {userMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-1">
                          <Link to="/profile" className="block px-4 py-2 text-sm">View Profile</Link>
                          <Link to="/update-profile" className="block px-4 py-2 text-sm">Update Profile</Link>
                          <Link to="/update-picture" className="block px-4 py-2 text-sm">Update Profile Picture</Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
