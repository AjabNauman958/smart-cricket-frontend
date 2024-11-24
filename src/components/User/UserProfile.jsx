import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaEdit } from 'react-icons/fa';
import Topheader from './Topheader';
import Footer from './Footer';
import '../css/userProfile.css'; // Import your CSS file
import userprofile from '../images/userprofile.jpg';
import { useSelector } from 'react-redux';


const UserProfile = () => {
  const favourites = useSelector((state) => state.favourites.favourites);
  console.log('Favourites in UserProfile:', favourites);



  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState({ oldPassword: false, newPassword: false, confirmNewPassword: false });
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const user = {
    email: 'userprofile@gmail.com',
  };

  const toggleShowPassword = field => setShowPassword(prevState => ({ ...prevState, [field]: !prevState[field] }));
  const togglePasswordFields = () => setShowPasswordFields(!showPasswordFields);

  const onSubmit = data => {
    console.log(data);
    setShowPopup(true); // Show popup on save
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div>
      <Topheader />

      <div className="user-profile-container mt-10">
        <div className="left-div ">
          <h2>Welcome,</h2>
          <p>{user.email}</p>
          <img src={userprofile} alt="Welcome Illustration" className="welcome-image" />
        </div>

        <div className="right-div">
          <h2>Edit <span className='text-green-600 font-semibold'>Player</span> Profile</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Profile Picture</label>
            <div className="profile-picture-container">
              <img src={profileImage} alt="Profile" className="profile-image-circle" />
              <div className="button-group">
                <label className="custom-file-upload">
                  Change Picture
                  <input type="file" onChange={handleImageChange} />
                </label>
                <button type="button" className="remove-button" onClick={() => setProfileImage('')}>Remove Picture</button>
              </div>
            </div>

            <div className="form-group">
              <label>Full Name</label>
              <div className="input-row">
                <input type="text" {...register('firstName')} placeholder="First Name" />
                <input type="text" {...register('lastName')} placeholder="Last Name" />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" {...register('email')} defaultValue={user.email} disabled />
            </div>

            <div className="form-group">
              <label>Address (Optional)</label>
              <input type="text" {...register('address')} placeholder="Address" />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input type="text" {...register('contactNumber')} placeholder="Contact Number" />
            </div>

            <div className="form-group">
              <label>
                Password
                <FaEdit className="edit-icon" onClick={togglePasswordFields} />
              </label>
              {showPasswordFields && (
                <>
                  <div className="password-container my-2">
                    <input type={showPassword.oldPassword ? 'text' : 'password'} {...register('oldPassword')} placeholder="Old Password" />
                    <button type="button" className="eye-icon" onClick={() => toggleShowPassword('oldPassword')}>
                      {showPassword.oldPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <div className="password-container my-2">
                    <input type={showPassword.newPassword ? 'text' : 'password'} {...register('newPassword')} placeholder="New Password" />
                    <button type="button" className="eye-icon" onClick={() => toggleShowPassword('newPassword')}>
                      {showPassword.newPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <div className="password-container my-2">
                    <input type={showPassword.confirmNewPassword ? 'text' : 'password'} {...register('confirmNewPassword')} placeholder="Confirm New Password" />
                    <button type="button" className="eye-icon" onClick={() => toggleShowPassword('confirmNewPassword')}>
                      {showPassword.confirmNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </>
              )}
            </div>

            <button type="submit" className="save-button">Save</button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Your data has been saved!</p>
            <button onClick={closePopup} className="popup-button1">OK</button>
            <button onClick={closePopup} className="popup-button2">Cancel</button>
          </div>
        </div>
      )}


      <div className="user-profile p-8 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          My Favourites
        </h1>
        {favourites.length === 0 ? (
          <p className="text-lg text-gray-500 text-center animate-pulse">
            No favourite matches added yet!
          </p>
        ) : (
          <div className="favourites grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favourites.map((match, index) => (
              <div
                key={index}
                className="match-card bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="header border-b pb-4 mb-4">
                  <h2 className="text-xl font-semibold text-gray-700">
                    {match.matchNumber}. {match.league}, 2024
                  </h2>
                  <div className="badge inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full mt-2">
                    {match.format}
                  </div>
                </div>
                <div className="teams flex justify-between items-center mb-4">
                  {match.teams.map((team, teamIndex) => (
                    <div
                      className="team flex items-center space-x-2"
                      key={teamIndex}
                    >
                      <img
                        src={team.logo}
                        alt={team.name}
                        className="w-10 h-10 object-contain"
                      />
                      <span className="text-gray-600 font-medium">{team.name}</span>
                    </div>
                  ))}
                </div>
                <div className="time text-gray-500 font-medium text-sm">
                  {match.time}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>


      <Footer />
    </div>
  );
};

export default UserProfile;
