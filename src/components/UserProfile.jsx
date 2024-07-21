import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaEdit } from 'react-icons/fa';
import Topheader from './Topheader';
import Footer from './Footer';
import '../components/css/userProfile.css'; // Import your CSS file
import userprofile from '../components/images/userprofile.jpg';

const UserProfile = () => {
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

      <Footer />
    </div>
  );
};

export default UserProfile;
