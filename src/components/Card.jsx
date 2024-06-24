import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative overflow-hidden bg-cover bg-no-repeat rounded-t-lg">
        <img
          className="w-full h-48 object-cover rounded-t-lg z-0"
          src={imageSrc}
          alt={title}
        />
        <div className="absolute inset-0 bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </div>
      <div className="px-6 py-4">
        <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800 dark:text-gray-50">{title}</h5>
        <p className="mb-4 text-base text-gray-600 dark:text-gray-200">{description}</p>
        <button
          type="button"
          className="inline-block rounded-lg bg-yellow-400 px-4 py-4"
        >
          Button
        </button>
      </div>
    </div>
  );
}

export default Card;
