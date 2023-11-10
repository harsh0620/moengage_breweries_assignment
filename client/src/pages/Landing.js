import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext';

const Landing = () => {
  const navigate=useNavigate();
  const { user } = useAppContext();
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Moengage Brewery Assignment</h1>
        <p className="text-gray-600 mb-4">
          Thank you for reviewing my Moengage Brewery Assignment. This project showcases my skills in building a Brewery Review System.
        </p>
        <button
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 mb-4"
          onClick={() => {
            navigate("/auth")
          }}
        >
          Login/Signup
        </button>
        <div>
        <p className="text-gray-600 mb-6">
          You can find more about me and my portfolio by visiting my website: <a
          href="https://www.harshchandravanshi.tech/" // Replace with your actual portfolio link
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          harshchandravanshi.tech
        </a>
        </p>
       
        </div>
       
      </div>
    </div>
  )
}

export default Landing