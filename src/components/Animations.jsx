import { useEffect } from 'react';
import '../FadeIn.css'; // Import the CSS file for the fade effects

const useFadeIn = () => {
  useEffect(() => {
    const elementsToFadeIn = document.querySelectorAll('.fade-element, .fade-left, .fade-right, .enter-right, .enter-left, .fadeIn-1, .fadeIn-2, .fadeIn-3, .fadeIn-4, .fadeIn-5, .fadeIn-6, .bounce-fade, .zoom-fade');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); // Add fade-in class when element is in view
          observer.unobserve(entry.target); // Unobserve the element after it fades in
        }
      });
    });

    elementsToFadeIn.forEach(element => {
      observer.observe(element); // Start observing the element
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useFadeIn;
