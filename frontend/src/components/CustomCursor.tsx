'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Check if the device has touch capabilities, disable cursor if true
    const isTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia('(any-pointer: coarse)').matches)
      );
    };

    if (isTouchDevice()) {
      return; // Do not initialize custom cursor on mobile/tablet
    }

    setIsHidden(false);

    // Mouse coordinates
    const mouse = { x: 0, y: 0 };
    // Delayed cursor coordinates
    const cursor = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseEnter = () => setIsHidden(false);
    const onMouseLeave = () => setIsHidden(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Optimized Animation Frame Loop for smooth interpolation
    let animationFrameId: number;

    const render = () => {
      // Interpolation factor (0.15 creates a beautiful spring lag effect)
      const ease = 0.15;
      
      cursor.x += (mouse.x - cursor.x) * ease;
      cursor.y += (mouse.y - cursor.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursor.x}px`;
        cursorRef.current.style.top = `${cursor.y}px`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Track hovered interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive-hover') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[9999] transition-all duration-300 ${
        isActive ? 'custom-cursor-active' : ''
      }`}
    />
  );
}
