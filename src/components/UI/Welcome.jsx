import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Endpoints from "../../Texts/Endpoints.js";

const WelcomeComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // sessionStorage.removeItem('token');
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl p-8 dark:bg-gray-800 rounded-2xl shadow-xl text-center transition-colors duration-300">
        <h2 className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-6">
          Welcome to the{" "}
          <span className="text-red-500 dark:text-red-400">Sqilline®</span>{" "}
          Anonymization App
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          Securely manage anonymization settings with ease.
        </p>

        <div className="flex flex-col space-y-4 max-w-md mx-auto">
          <button
            className="w-full py-3 px-6 rounded-lg bg-blue-600 dark:bg-blue-700 cursor-pointer text-white text-lg font-semibold transition transform hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => navigate(Endpoints.login)}
          >
            Login
          </button>

          <button
            className="w-full py-3 px-6 rounded-lg bg-gray-600 dark:bg-gray-700 cursor-pointer text-white text-lg font-semibold transition transform hover:scale-105 hover:bg-gray-700 dark:hover:bg-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            onClick={() => navigate(Endpoints.register)}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
