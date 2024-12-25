import React, { useEffect } from "react";

const Particles = () => {
  useEffect(() => {
    const particlesContainer = document.body;

    function createParticle() {
      const particle = document.createElement("div");
      const size = Math.random() * 10 + 5; // Random size between 5px and 15px
      const leftPosition = Math.random() * 99; // Percentage for 100% width
      const animationDuration = Math.random() * 8 + 10; // Random falling duration between 10s and 18s

      particle.classList.add("particle");
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${leftPosition}vw`;

      const randomParticle = Math.floor(Math.random() * 4) + 1;
      particle.classList.add(`particle${randomParticle}`);

      // Append particle to the body
      particlesContainer.appendChild(particle);

      // Set the animation duration for the particle's falling effect
      particle.style.animationDuration = `${animationDuration}s`;

      // Remove particle after animation ends
      setTimeout(() => {
        particle.remove();
      }, animationDuration * 1000); // Remove after the animation completes
    }

    // Create a new particle every 100ms
    const particleInterval = setInterval(createParticle, 75);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div>
      <style>
        {`
          .particle {
            position: absolute;
            top: -10vh;
            border-radius: 50%;
            opacity: 0.8;
            animation: particleFall 10s infinite linear;
            background-color: var(--text-color);
            z-index: -10000;
          }

          @keyframes particleFall {
            0% {
              transform: translateY(-100vh);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh);
              opacity: 0.3;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Particles;
