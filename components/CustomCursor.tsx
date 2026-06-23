"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (!cursor) return;
      cursor.style.left = `${e.clientX - 12}px`;
      cursor.style.top = `${e.clientY - 12}px`;
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[100] w-6 h-6 border border-primary items-center justify-center mix-blend-difference hidden md:flex"
    >
      <div className="w-1 h-1 bg-primary" />
    </div>
  );
}
