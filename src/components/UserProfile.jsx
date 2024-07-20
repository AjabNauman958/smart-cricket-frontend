import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaEdit } from 'react-icons/fa';
import Topheader from './Topheader';
import Footer from './Footer';
import '../components/css/userProfile.css';
import userprofile from '../components/images/userprofile.jpg'; // Replace with your actual image path

const UserProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');

  const user = {
    email: 'userprofile@gmail.com',
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = data => {
    console.log(data);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <Topheader />

      <div className="user-profile-container">
        <div className="left-div">
          <h2>Welcome,</h2>
          <p>{user.email}</p>
          <img src={userprofile} alt="Welcome Illustration" className="welcome-image" />
        </div>

        <div className="right-div">
          <h2>Edit Player Profile</h2>
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
              <label>
                Full Name
              </label>
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
                <FaEdit className="edit-icon" />
              </label>
              <div className="password-container">
                <input type={showPassword ? 'text' : 'password'} {...register('password')} placeholder="Password" />
                <button type="button" onClick={toggleShowPassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="save-button">Save</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
