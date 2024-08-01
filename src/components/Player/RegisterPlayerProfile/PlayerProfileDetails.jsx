import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlayerProfileDetails = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/80');
  const [name, setName] = useState('Micky Aurther');

  const onSubmit = (data) => {
    console.log(data);
    setIsEditing(false);
    setName(data.name);
    toast.success('Profile updated successfully!');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage('https://via.placeholder.com/80');
  };

  const validatePasswordMatch = (value) => {
    return value === watch('newPassword') || 'Passwords do not match';
  };

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-400 to-indigo-500 p-8 rounded-lg shadow-md flex-wrap">
      <div className="flex space-x-8 ">
        <div className="flex flex-col items-center text-white ">
          <div className="w-20 h-20 rounded-full bg-gray-300 mb-4" style={{ backgroundImage: `url(${profileImage})`, backgroundSize: 'cover' }}></div>
          <h2 className="text-xl font-semibold">{name}</h2>
          {isEditing && (
            <div className="mt-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="text-white"
              />
              {profileImage !== 'https://via.placeholder.com/80' && (
                <button type="button" onClick={removeImage} className="ml-4 text-red-500">Remove</button>
              )}
            </div>
          )}
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-white">Name</label>
              <input
                type="text"
                {...register('name', { required: true })}
                defaultValue={name}
                disabled={!isEditing}
                className={`mt-1 p-2 rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
              />
              {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
            </div>
            <div className="flex flex-col">
              <label className="text-white">Email account</label>
              <input
                type="email"
                {...register('email', { required: true })}
                defaultValue="yourname@gmail.com"
                disabled={!isEditing}
                className={`mt-1 p-2 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
              />
              {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
            </div>
            <div className="flex flex-col">
              <label className="text-white">Mobile number</label>
              <input
                type="text"
                {...register('mobile', { required: true })}
                placeholder="Add number"
                disabled={!isEditing}
                className={`mt-1 p-2 rounded border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
              />
              {errors.mobile && <span className="text-red-500 text-sm">Mobile number is required</span>}
            </div>
            <div className="flex flex-col">
              <label className="text-white">Location</label>
              <input
                type="text"
                {...register('location', { required: true })}
                defaultValue="AUS"
                disabled={!isEditing}
                className={`mt-1 p-2 rounded border ${errors.location ? 'border-red-500' : 'border-gray-300'} focus:outline-none`}
              />
              {errors.location && <span className="text-red-500 text-sm">Location is required</span>}
            </div>
            <div className="flex flex-col">
              <label className="text-white">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', { required: true })}
                  placeholder="Your Password"
                  disabled={!isEditing}
                  className={`mt-1 p-2 rounded border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none w-full`}
                />
                <span onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-white">
                  {showPassword ? '🙈' : '👁'}
                </span>
              </div>
              {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
            </div>
            {isEditing && (
              <>
                <div className="flex flex-col">
                  <label className="text-white">New Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      {...register('newPassword', { required: false })}
                      placeholder="New Password"
                      className={`mt-1 p-2 rounded border ${errors.newPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none w-full`}
                    />
                    <span onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-white">
                      {showPassword ? '🙈' : '👁'}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-white">Confirm New Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      {...register('confirmNewPassword', { validate: validatePasswordMatch })}
                      placeholder="Confirm New Password"
                      className={`mt-1 p-2 rounded border ${errors.confirmNewPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none w-full`}
                    />
                    <span onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-white">
                      {showPassword ? '🙈' : '👁'}
                    </span>
                  </div>
                  {errors.confirmNewPassword && <span className="text-red-500 text-sm">{errors.confirmNewPassword.message}</span>}
                </div>
              </>
            )}
            {!isEditing ? (
              <button type="button" className="w-full bg-yellow-500 text-gray-800 font-semibold py-2 mt-4 rounded-lg hover:bg-yellow-400 transition duration-300" onClick={() => setIsEditing(true)}>Edit Details</button>
            ) : (
              <button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-green-400 transition duration-300">Save</button>
            )}
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PlayerProfileDetails;
