"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  animation?: "fade-up" | "fade-in" | "scale-up";
}

export default function AnimateOnScroll({ 
  children, 
  className = "", 
  delay = 0,
  animation = "fade-up" 
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8";
      case "fade-in":
        return isVisible 
          ? "opacity-100" 
          : "opacity-0";
      case "scale-up":
        return isVisible 
          ? "opacity-100 scale-100" 
          : "opacity-0 scale-95";
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}



