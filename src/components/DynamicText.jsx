import React, { useState, useEffect } from "react";

const words = ["Software", "Blockchain", "Mobile App", "Iot devices", "AI models", "ERP"];

const DynamicText = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 90; // Typing speed in milliseconds
  const deletingSpeed = 70; // Deleting speed in milliseconds

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1)); // Delete one character
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
        }
      } else {
        if (displayedText.length < currentWord.length) {
          setDisplayedText((prev) => currentWord.slice(0, prev.length + 1)); // Add one character
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      }
    };

    const interval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [displayedText, isDeleting]);

  return (
    <span className="text-blue-500 ">{displayedText}</span>
  );
};

export default DynamicText;
