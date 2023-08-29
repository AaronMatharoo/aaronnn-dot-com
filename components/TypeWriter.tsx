import React, { useEffect, useState } from 'react'

type Props = {}

const TypeWriter = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      const typingSpeed = isDeleting ? 50 : 150;
      const pauseDuration = 4000;

      const timer = setTimeout(() => {
        if (!isDeleting && !isPaused) {
          if (currentIndex < text.length) {
            setDisplayText((prevText) => prevText + text[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          } else {
            setIsDeleting(true);
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
            }, pauseDuration);
          }
        } else if (isDeleting && !isPaused) {
          if (displayText.length > 0) {
            setDisplayText((prevText) => prevText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setCurrentIndex(0);
              setIsDeleting(false);
            }, pauseDuration);
          }
        }
      }, typingSpeed);

      return () => clearTimeout(timer);
    }, [displayText, currentIndex, text, isDeleting, isPaused]);

    return (
      <div className="text-5xl font-bold">
        {displayText}
        <span
          style={{
            animation: "blink 0.7s infinite",
            opacity: currentIndex < text.length && !isDeleting ? 1 : 0,
          }}
          className="ml-1"
        >
          |
        </span>
        <style>
          {`
          @keyframes blink {
            0%, 100% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
          }
        `}
        </style>
      </div>
    );
  };

export default TypeWriter