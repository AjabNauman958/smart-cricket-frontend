import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past the minimum height of the screen
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed right-5 duration-300 bottom-10 bg-yellow-400 hover:bg-yellow-500 rounded-full text-white text-3xl border-none px-4 py-2 z-50 font-bold"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
