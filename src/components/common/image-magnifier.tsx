"use client";

import Image from "next/image";
import { useRef, useEffect, useState, MouseEvent } from "react";

interface ImageMagnifierProps {
  src: string;
  zoomLevel?: number;
  magnifierSize?: number;
}

export const ImageMagnifier = ({
  src,
  zoomLevel = 2,
  magnifierSize = 100,
}: ImageMagnifierProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Draws the zoomed area on the canvas
  const drawMagnifiedArea = (x: number, y: number) => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (img && canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const { width: imgWidth, height: imgHeight } = img;
        const sx =
          (x / imgWidth) * img.naturalWidth - magnifierSize / (2 * zoomLevel);
        const sy =
          (y / imgHeight) * img.naturalHeight - magnifierSize / (2 * zoomLevel);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          sx,
          sy,
          magnifierSize / zoomLevel,
          magnifierSize / zoomLevel,
          0,
          0,
          magnifierSize,
          magnifierSize,
        );
      }
    }
  };

  // Handle mouse move event
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    drawMagnifiedArea(x, y);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        const ctx = canvasRef.current?.getContext("2d");
        ctx?.clearRect(0, 0, magnifierSize, magnifierSize);
      }}
      onMouseMove={handleMouseMove}
    >
      <Image
        ref={imgRef}
        src={src}
        alt="Zoomable"
        width={1200}
        height={1200}
        style={{ display: "block", width: "100%", height: "100%" }}
      />

      {isHovered && (
        <canvas
          ref={canvasRef}
          width={magnifierSize}
          height={magnifierSize}
          style={{
            position: "absolute",
            pointerEvents: "none",
            top: `${mousePosition.y - magnifierSize / 2}px`,
            left: `${mousePosition.x - magnifierSize / 2}px`,
            borderRadius: "50%",
            border: "2px solid rgba(0, 0, 0, 0.2)",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
          }}
        />
      )}
    </div>
  );
};
