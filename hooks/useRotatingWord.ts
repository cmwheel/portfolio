"use client";

import { useState, useEffect } from "react";

const words = ["autonomy", "renewable energy", "the future", "sustainable abundance"];

export function useRotatingWord(interval: number = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      // Change word after a brief delay
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 400);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return {
    word: words[currentIndex],
    isAnimating,
  };
}

