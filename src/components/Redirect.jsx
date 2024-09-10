// Redirect.jsx
import React from 'react';

const Redirect = ({ to, children }) => {
    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default anchor link behavior
        const targetElement = document.getElementById(to); // Get the element based on passed 'to' prop
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start'     // Align to the top of the viewport
            });
        }
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            {children}
        </div>
    );
};

export default Redirect;
