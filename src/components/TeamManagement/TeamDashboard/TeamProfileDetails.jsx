import React, { useState } from "react";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import pakistanFlag from '../../images/pak.png'; // Replace with the correct path to your flag image

Modal.setAppElement('#root'); // Add this line to ensure screen readers work properly

const TeamProfileDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHeartClick = () => {
    setIsModalOpen(true);
  };

  const handleSaveClick = () => {
    toast.success("Saved to favorites!");
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 rounded-lg bg-teal-600 shadow-lg text-white mb-10 dark:bg-gray-900 dark:text-white ">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center ">
        <img src={pakistanFlag} alt="Pakistan Flag" className="w-28 h-28 rounded-full mb-4 sm:mb-0" />
        <div className="flex-grow text-center sm:text-left sm:ml-4">
          <h2 className="text-xl font-semibold">ICC Rankings</h2>
          <div className="flex justify-around mt-2">
            <div>
              <p className="font-bold">Test</p>
              <p>4</p>
            </div>
            <div>
              <p className="font-bold">ODI</p>
              <p>3</p>
            </div>
            <div>
              <p className="font-bold">T20</p>
              <p>6</p>
            </div>
          </div>
          <h3 className="mt-4 font-semibold">PAKISTAN TEAM CAPTAINS</h3>
          <div className="flex justify-around mt-2">
            <div>
              <p className="font-bold">Test</p>
              <p>Shan Masood</p>
            </div>
            <div>
              <p className="font-bold">ODI</p>
              <p>Shan Masood</p>
            </div>
            <div>
              <p className="font-bold">T20</p>
              <p>Shan Masood</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-gray-800 text-white py-1 px-4 rounded-full">Pakistan</button>
        <div className="flex space-x-4">
          <FaHeart className="text-white cursor-pointer" onClick={handleHeartClick} />
          <FaShareAlt className="text-white" />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto mt-24"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-lg font-semibold mb-4">Are you sure you want to add to favorites?</h2>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-500 text-white py-1 px-4 rounded"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white py-1 px-4 rounded"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default TeamProfileDetails;
