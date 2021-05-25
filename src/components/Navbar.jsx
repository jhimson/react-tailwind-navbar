/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => (
  <div>
    {/* navbar goes here */}

    <nav className="font-bold bg-gray-100">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <a
                href="#"
                className="flex items-center px-2 py-5 text-gray-700 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-1 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span className="font-bold">Better Dev</span>
              </a>
            </div>

            {/* primary nav */}
            <div className="flex items-center space-x-1">
              <a
                href="#"
                className="px-3 py-5 text-gray-700 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#"
                className="px-3 py-5 text-gray-700 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* secondary nav */}
          <div className="flex items-center space-x-1">
            <a href="#" className="px-3 py-5">
              Login
            </a>
            <a
              href="#"
              className="px-3 py-2 text-yellow-900 transition duration-300 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800"
            >
              Signup
            </a>
          </div>
        </div>
      </div>

      {/* mobile menu */}
    </nav>

    {/* content goes here */}

    <div className="py-32 text-center">
      <h2 className="text-4xl font-extrabold">Navbar in Tailwind!</h2>
    </div>
  </div>
);

export default Navbar;
