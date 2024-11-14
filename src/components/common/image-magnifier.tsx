"use client";

import Image from "next/image";
import { useRef, useState, MouseEvent } from "react";
import { createPortal } from "react-dom";

interface ImageMagnifierProps {
  src: string;
  zoomLevel?: number;
  magnifierSize?: number;
}

export const ImageMagnifier = ({
  src,
  zoomLevel = 0.5,
  magnifierSize = 50,
}: ImageMagnifierProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const portalCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Draws the zoomed area on the portal canvas
  const drawMagnifiedArea = (x: number, y: number) => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const portalCanvas = portalCanvasRef.current;
    if (img && canvas && portalCanvas) {
      const ctx = canvas.getContext("2d");
      const portalCtx = portalCanvas.getContext("2d");

      if (ctx && portalCtx) {
        const { width: imgWidth, height: imgHeight } = img;

        const sx =
          (x / imgWidth) * img.naturalWidth - magnifierSize / (2 * zoomLevel);
        const sy =
          (y / imgHeight) * img.naturalHeight - magnifierSize / (2 * zoomLevel);

        const zoomedWidth = magnifierSize / zoomLevel;
        const zoomedHeight = magnifierSize / zoomLevel;

        // Clear both canvases before drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        portalCtx.clearRect(0, 0, portalCanvas.width, portalCanvas.height);

        // Draw on inline magnifier
        ctx.drawImage(
          img,
          sx,
          sy,
          zoomedWidth,
          zoomedHeight,
          0,
          0,
          magnifierSize,
          magnifierSize,
        );

        // Draw on portal with higher resolution
        portalCtx.drawImage(
          img,
          sx,
          sy,
          zoomedWidth,
          zoomedHeight,
          0,
          0,
          portalCanvas.width,
          portalCanvas.height,
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
    <>
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          const ctx = canvasRef.current?.getContext("2d");
          const portalCtx = portalCanvasRef.current?.getContext("2d");
          ctx?.clearRect(0, 0, magnifierSize, magnifierSize);
          portalCtx?.clearRect(
            0,
            0,
            portalCanvasRef?.current?.width || 800,
            portalCanvasRef?.current?.height || 800,
          );
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

        {/* Portal for the high-resolution magnified image view */}
        {isHovered &&
          createPortal(
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                width: "800px",
                height: "500px",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                overflow: "hidden",
                zIndex: 1000,
                transform: "translate(-25%, -50%)",
                backgroundColor: "white",
              }}
            >
              <canvas
                ref={portalCanvasRef}
                width={800}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>,
            document.body,
          )}
      </div>
    </>
  );
};
