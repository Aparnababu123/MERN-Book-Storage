import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('https://cbx-prod.b-cdn.net/COLOURBOX48674999.jpg?width=800&height=800&quality=70')` }} // Replace with your desired image URL or local path
    >
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg shadow-lg transition"
      >
        Learn More
      </button>
    </div>
  );
};

export default Main;
