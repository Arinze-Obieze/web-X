"use client";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-gray-800 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="md:py-4 flex place-items-center">
              <h1 className="md:text-4xl text-2xl text-white font-bold"> Web</h1>
              <img
                src="/logo.svg"
                alt=""
                className=" md:w-12 w-10 md:mx-4 mx-2 my-4 rounded-full text-gray-900"
              />
            </div>

            <div className="md:hidden">
              <button
                className="p-2 text-blue-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-200 hover:text-blue-600">
                <a href="/">Home</a>
              </li>
              <li className="text-gray-200 hover:text-blue-600">
                <a href="">Pricing</a>
              </li>
              <li className="text-gray-200 hover:text-blue-600">
                <a href="/">Products</a>
              </li>
              <li className="text-gray-200 hover:text-blue-600">
                <a href="/">Features</a>
              </li>
              <li className="text-gray-200 hover:text-blue-600">
                <a href="/editor">Studio</a>
              </li>
              <li className="text-gray-200 hover:text-blue-600">
                <a href="/">Live Demos and Templates</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
