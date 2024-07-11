import React, { useState } from 'react';

function TeamProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (evxent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with data:', {
      name,
      email,
      mobile,
      location,
      password,
    });
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 xl:w-1/4 p-4">
          <div className="bg-white shadow-md rounded p-4">
            <h5 className="text-lg font-bold mb-2">Dashboard</h5>
            <ul>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-house-door-fill mr-2"></i> Dashboard
              </li>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-person-fill mr-2"></i> Players Stats
              </li>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-calendar-check-fill mr-2"></i> Team Schedule
              </li>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-graph-up mr-2"></i> Performance Prediction
              </li>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-person-fill mr-2"></i> Player's Performance
              </li>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-people-fill mr-2"></i> Team's Performance
              </li>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-graph-up mr-2"></i> Performance Analysis
              </li>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-person-fill mr-2"></i> Player's Performance
              </li>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-people-fill mr-2"></i> Team's Performance
              </li>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-question-circle-fill mr-2"></i> Suggest Playing Xi
              </li>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-person-circle mr-2"></i> Opponent Analysis
              </li>
              <li className="py-2 border-b border-gray-200">
                <i className="bi bi-box-arrow-in-left mr-2"></i> Logout
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-2/3 xl:w-3/4 p-4">
          <div className="bg-white shadow-md rounded p-4">
            <h5 className="text-lg font-bold mb-2">Edit Team Management Profile</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email account
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
              
                     
                         <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">
                  Mobile number
                </label>
                <input
                  type="tel"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamProfile;