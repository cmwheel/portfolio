"use client";

import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export function useTypewriter({ text, speed = 100, delay = 0 }: UseTypewriterOptions) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    let isMounted = true;

    const startTyping = () => {
      setIsTyping(true);
      setDisplayedText("");

      const type = () => {
        if (!isMounted) return;
        
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(type, speed);
        } else {
          setIsTyping(false);
        }
      };

      timeoutId = setTimeout(() => {
        if (isMounted) {
          type();
        }
      }, delay);
    };

    startTyping();

    return () => {
      isMounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, delay]);

  return { displayedText, isTyping };
}

