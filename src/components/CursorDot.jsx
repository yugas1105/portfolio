import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

const CursorDot = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let dotX = 0;
    let dotY = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", moveMouse);

    const animate = () => {
      dotX += (mouseX - dotX) * 0.1;
      dotY += (mouseY - dotY) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <Box
      ref={dotRef}
      sx={{
        width: 15,
        height: 15,
        backgroundColor: "#ff4d2d",
        borderRadius: "50%",
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        // boxShadow: "0 0 10px orange, 0 0 20px orange", // glow
      }}
    />
  );
};

export default CursorDot;