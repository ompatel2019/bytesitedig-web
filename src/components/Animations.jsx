import { useEffect } from 'react';
import '../FadeIn.css'; // Import the CSS file for the fade effects

const useFadeIn = () => {
  useEffect(() => {
    const elementsToFadeIn = document.querySelectorAll(
      '.fade-element, .fade-left, .fade-right, .fade-up, .fade-down, .enter-right, .enter-left, .fadeIn-1, .fadeIn-2, .fadeIn-3, .fadeIn-4, .fadeIn-5, .fadeIn-6'
    );

    const observerOptions = {
      root: null, // Use the viewport as the default root
      rootMargin: '0px', // No margin, elements will be triggered as they enter the viewport
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); // Add the fade-in class to trigger the animation
          observer.unobserve(entry.target); // Stop observing once the animation has been triggered
        }
      });
    }, observerOptions);

    elementsToFadeIn.forEach((element) => {
      element.style.opacity = '0'; // Ensure all elements are invisible at the start
      observer.observe(element); // Start observing each element
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useFadeIn;
