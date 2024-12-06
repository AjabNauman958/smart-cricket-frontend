import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Add smooth scrolling effect
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Enables smooth scrolling
        });
    }, [pathname]); // Trigger on route change

    return null;
};

export default ScrollToTop;
