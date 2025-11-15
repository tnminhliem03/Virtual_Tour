import { Box } from "@mui/material";
import React, { useRef, useState } from "react";

const VirtualDrag = () => {
  const totalFrames = 120;
  const [frameIndex, setFrameIndex] = useState(0);
  const containerRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const startMouseRef = useRef(0);
  const currentFrameRef = useRef(0);

  const images = [];
  for (let i = 1; i <= totalFrames; i++) {
    images.push(require(`../assets/images/rotation/${i}.jpg`));
  }

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startMouseRef.current = e.clientX;
    currentFrameRef.current = frameIndex;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const dx = e.clientX - startMouseRef.current;
    const sensitivity = 10;
    let deltaFrames = Math.floor(dx / sensitivity);

    let newIndex = (currentFrameRef.current + deltaFrames) % totalFrames;
    if (newIndex < 0) newIndex += totalFrames;
    setFrameIndex(newIndex);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Touch events
  const handleTouchStart = (e) => {
    setIsDragging(true);
    startMouseRef.current = e.touches[0].clientX;
    currentFrameRef.current = frameIndex;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startMouseRef.current;
    const sensitivity = 10;
    let deltaFrames = Math.floor(dx / sensitivity);

    let newIndex = (currentFrameRef.current + deltaFrames) % totalFrames;
    if (newIndex < 0) newIndex += totalFrames;
    setFrameIndex(newIndex);
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <Box
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        userSelect: "none",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={images[frameIndex]}
        alt={`frame-${frameIndex}`}
        style={{
          width: "100%",
          height: "100%",
          userSelect: "none",
          objectFit: "cover",
        }}
        draggable={false}
      />
    </Box>
  );
};

export default VirtualDrag;
