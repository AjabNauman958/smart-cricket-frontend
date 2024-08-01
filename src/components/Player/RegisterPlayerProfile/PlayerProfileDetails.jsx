import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import {
  MdLockOutline,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdPerson,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";

const PlayerProfileDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    clearErrors,
  } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/80"
  );
  const [name, setName] = useState("Shaheen Shah Afridi");

  const onSubmit = (data) => {
    if (data.password === data.newPassword) {
      setError("newPassword", {
        type: "manual",
        message: "New password cannot be the same as the old password",
      });
      toast.error("New password cannot be the same as the old password");
      return;
    }

    console.log(data);
    setIsEditing(false);
    setName(data.name);
    toast.success("Profile updated successfully!");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
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
    setProfileImage("https://via.placeholder.com/80");
  };

  const validatePasswordMatch = (value) => {
    if (value !== watch("newPassword")) {
      return "Passwords do not match";
    }
    return true;
  };

  return (
    <div className="max-w-4xl mx-auto p-8 flex-wrap mt-7 rounded-3xl">
      <div className="flex space-x-8 justify-center items-start">
        <div className="flex flex-col items-center dark:bg-gray-900 dark:text-white">
          <img
            src={profileImage}
            alt=""
            className="w-28 h-28 rounded-full bg-gray-300 mb-4"
          />
          <h2 className="text-xl font-semibold text-center">{name}</h2>
          {isEditing && (
            <div className="mt-4 text-center  rounded-md">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="dark:bg-gray-900 dark:text-white text-center m-auto w-full"
              />
              {profileImage !== "https://via.placeholder.com/80" && (
                <button
                  type="button"
                  onClick={removeImage}
                  className="ml-4 text-red-500 btn mt-4 m-auto"
                >
                  Remove
                </button>
              )}
            </div>
          )}
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col relative">
              <label className="text-green-500 font-semibold flex items-center">
                <MdPerson className="mr-2" />
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                defaultValue={name}
                disabled={!isEditing}
                className={`mt-1 pl-8 p-2 rounded border ${errors.name ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-green-400`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>
            <div className="flex flex-col relative">
              <label className="text-green-500 font-semibold flex items-center">
                <MdEmail className="mr-2" />
                Email account
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                defaultValue="yourname@gmail.com"
                disabled={!isEditing}
                className={`mt-1 pl-8 p-2 rounded border ${errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-green-400`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>
            <div className="flex flex-col relative">
              <label className="text-green-500 font-semibold flex items-center">
                <MdPhone className="mr-2" />
                Mobile number
              </label>
              <input
                type="text"
                {...register("mobile", { required: true })}
                placeholder="Add number"
                disabled={!isEditing}
                className={`mt-1 pl-8 p-2 rounded border ${errors.mobile ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-green-400`}
              />
              {errors.mobile && (
                <span className="text-red-500 text-sm">
                  Mobile number is required
                </span>
              )}
            </div>
            <div className="flex flex-col relative">
              <label className="text-green-500 font-semibold flex items-center">
                <MdLocationOn className="mr-2" />
                Location
              </label>
              <input
                type="text"
                {...register("location", { required: true })}
                defaultValue="AUS"
                disabled={!isEditing}
                className={`mt-1 pl-8 p-2 rounded border ${errors.location ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-green-400`}
              />
              {errors.location && (
                <span className="text-red-500 text-sm">
                  Location is required
                </span>
              )}
            </div>
            <div className="flex flex-col relative">
              <label className="text-green-500 font-semibold flex items-center">
                <MdLockOutline className="mr-2" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  placeholder="Your Password"
                  disabled={!isEditing}
                  className={`mt-1 pl-8 p-2 rounded border ${errors.password ? "border-red-500" : "border-gray-300"
                    } focus:outline-none w-full focus:ring-2 focus:ring-green-400`}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400"
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Password is required
                </span>
              )}
            </div>
            {isEditing && (
              <>
                <div className="flex flex-col relative">
                  <label className="text-green-500 font-semibold flex items-center">
                    <MdLockOutline className="mr-2" />
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      {...register("newPassword")}
                      placeholder="New Password"
                      className={`mt-1 pl-8 p-2 rounded border ${errors.newPassword
                          ? "border-red-500"
                          : "border-gray-300"
                        } focus:outline-none w-full focus:ring-2 focus:ring-green-400`}
                    />
                    <span
                      onClick={toggleNewPasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400"
                    >
                      {showNewPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </span>
                  </div>
                  {errors.newPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.newPassword.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col relative">
                  <label className="text-green-500 font-semibold flex items-center">
                    <MdLockOutline className="mr-2" />
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmNewPassword", {
                        validate: validatePasswordMatch,
                      })}
                      placeholder="Confirm New Password"
                      className={`mt-1 pl-8 p-2 rounded border ${errors.confirmNewPassword
                          ? "border-red-500"
                          : "border-gray-300"
                        } focus:outline-none w-full focus:ring-2 focus:ring-green-400`}
                    />
                    <span
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400"
                    >
                      {showConfirmPassword ? (
                        <MdVisibilityOff />
                      ) : (
                        <MdVisibility />
                      )}
                    </span>
                  </div>
                  {errors.confirmNewPassword && (
                    <span className="text-red-500 text-sm">
                      {errors.confirmNewPassword.message}
                    </span>
                  )}
                </div>
              </>
            )}
            {isEditing ? (
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="mt-4 bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500 transition"
              >
                Edit Details
              </button>
            )}
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default PlayerProfileDetails;
