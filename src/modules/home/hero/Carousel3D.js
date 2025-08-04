// components/Carousel3D.jsx
"use client"; // Mark as client-side component

import { useEffect, useRef } from "react";

export default function Carousel3D() {
  const carouselRef = useRef(null);
  const panels = [
    {
      title: "Debugging the Matrix",
      description:
        "Is this reality, or just a beautiful bug we chose not to fix?",
    },
    {
      title: "CSS Alchemy",
      description: "Turning basic divs into gold with the power of style.",
    },
    {
      title: "The DOM Treehouse",
      description:
        "A structure built of nodes, branches, and endless possibilities.",
    },
    {
      title: "Recursive Reality",
      description:
        "To understand recursion, you must first understand recursion.",
    },
    {
      title: "Async Awaits",
      description:
        "The future is non-blocking, and it promises to be spectacular.",
    },
    {
      title: "Paradigm Paradox",
      description: "An object-oriented approach to a functional existence.",
    },
    {
      title: "Syntax Synthesis",
      description: "Composing digital poetry one line of code at a time.",
    },
    {
      title: "The Abstract Void",
      description:
        "Nothing concrete exists here, yet I feel the underlying logic...",
    },
    {
      title: "API Symphony",
      description: "A coordinated orchestra of data fetching and responses.",
    },
  ];
  const numPanels = panels.length;
  const angle = 360 / numPanels;
  let currentRotation = 0;
  let isDragging = false;
  let startX = 0;
  let startRotation = 0;
  const dragSpeed = 0.5;

  useEffect(() => {
    const carousel = carouselRef.current;
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    const updateCarouselRotation = () => {
      carousel.style.transition =
        "transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)";
      carousel.style.transform = `rotateY(${currentRotation}deg)`;
    };

    const handleNext = () => {
      currentRotation -= angle;
      updateCarouselRotation();
    };

    const handlePrev = () => {
      currentRotation += angle;
      updateCarouselRotation();
    };

    const handleMouseDown = (e) => {
      e.preventDefault();
      isDragging = true;
      startX = e.pageX;
      startRotation = currentRotation;
      carousel.style.transition = "none";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.pageX - startX;
      currentRotation = startRotation + deltaX * dragSpeed;
      carousel.style.transform = `rotateY(${currentRotation}deg)`;
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      const closestPanelIndex = Math.round(currentRotation / angle);
      currentRotation = closestPanelIndex * angle;
      updateCarouselRotation();
    };

    const handleMouseLeave = () => {
      if (isDragging) {
        isDragging = false;
        const closestPanelIndex = Math.round(currentRotation / angle);
        currentRotation = closestPanelIndex * angle;
        updateCarouselRotation();
      }
    };

    if (prevBtn && nextBtn) {
      nextBtn.addEventListener("click", handleNext);
      prevBtn.addEventListener("click", handlePrev);
    }
    carousel.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (prevBtn && nextBtn) {
        nextBtn.removeEventListener("click", handleNext);
        prevBtn.removeEventListener("click", handlePrev);
      }
      carousel.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [angle]);

  return (
    <div className="relative w-[180px] h-[250px] perspective-[800px]">
      <style jsx>{`
        .carousel {
          width: 100%;
          height: 100%;
          position: absolute;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
          cursor: grab;
        }
        .carousel:active {
          cursor: grabbing;
        }
        .panel {
          position: absolute;
          width: 180px;
          height: 250px;
          left: 0;
          top: 0;
          border-radius: 10px;
          background: rgba(35, 30, 60, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 15px;
          box-sizing: border-box;
          text-align: center;
          user-select: none;
          color: #fff;
          z-index: 20;
        }
        .panel h3 {
          color: #00c3ff;
          font-size: 0.4rem;
          margin-bottom: 0.3rem;
        }
        .panel p {
          color: #ccc;
          font-size: 0.4rem;
        }
        .panel:nth-child(1) {
          transform: rotateY(0deg) translateZ(250px);
        }
        .panel:nth-child(2) {
          transform: rotateY(40deg) translateZ(250px);
        }
        .panel:nth-child(3) {
          transform: rotateY(80deg) translateZ(250px);
        }
        .panel:nth-child(4) {
          transform: rotateY(120deg) translateZ(250px);
        }
        .panel:nth-child(5) {
          transform: rotateY(160deg) translateZ(250px);
        }
        .panel:nth-child(6) {
          transform: rotateY(200deg) translateZ(250px);
        }
        .panel:nth-child(7) {
          transform: rotateY(240deg) translateZ(250px);
        }
        .panel:nth-child(8) {
          transform: rotateY(280deg) translateZ(250px);
        }
        .panel:nth-child(9) {
          transform: rotateY(320deg) translateZ(250px);
        }
      `}</style>

      <div ref={carouselRef} className="carousel">
        {panels.map((panel, index) => (
          <div key={index} className="panel">
            <h3>{panel.title}</h3>
            <p>{panel.description}</p>
          </div>
        ))}
      </div>

      {/* Navigation buttons are commented out as per your code */}
      {/* <div className="flex gap-2 mt-4 z-30">
        <button
          id="prev-btn"
          className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 active:-translate-y-0.5 transition-transform"
        >
          Anterior
        </button>
        <button
          id="next-btn"
          className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 active:-translate-y-0.5 transition-transform"
        >
          Siguiente
        </button>
      </div> */}
    </div>
  );
}
