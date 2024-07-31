import React, { useState } from 'react';
import playerProfileImage from '../../images/shaheen.jpeg';
import countryFlag from '../../images/pak.png';
import { FaMapMarkerAlt, FaHeart, FaShareAlt } from 'react-icons/fa';

const PlayerProfileCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToFavorites = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-[#00A09A] text-white p-4 transform transition-transform hover:scale-105 duration-400 mb-8">
      <div className="flex items-center justify-start mb-4">
        <img src={countryFlag} alt="Pakistan Flag" className="w-12 h-12 mr-2  border-2 rounded-full" />
        <h2 className="text-xl font-bold">Shaheen Shah Afridi</h2>
      </div>
      <div className="flex justify-center mb-4">
        <img className="rounded-full border-4 border-white w-64 h-auto" src={playerProfileImage} alt="Shaheen Shah Afridi" />
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-300">INTL CAREER 2018 - 2024</p>
       
      </div>
      <div className="flex justify-end mt-4 space-x-2 ml-2">
      <p className="text-lg  flex items-center justify-center">
          <FaMapMarkerAlt className="mr-2" /> Pakistan | Bowler
        </p>
        <button 
          className=" text-white py-2 text-2xl rounded flex items-center justify-center "
          onClick={handleAddToFavorites}
        >
          <FaHeart className="mr-2" /> 
        </button>
        <button 
          className=" text-white py-2 text-2xl rounded flex items-center justify-center "
        >
          <FaShareAlt className="mr-2" /> 
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg text-black">
            <p>Are you sure you want to add this to favorites?</p>
            <div className="mt-4 flex justify-end">
              <button 
                className="bg-red-500 text-white py-2 px-4 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button 
                className="bg-green-500 text-white py-2 px-4 rounded"
                onClick={closeModal}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerProfileCard;
