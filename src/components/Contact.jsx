import React, { useRef } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const Contact = () => {
  const [showBtn, setShowBtn] = useState(false);
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 300); // show after scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Box
        sx={{
          minHeight: {
            xs: "auto",
            md: "80vh",
          },
          bgcolor: "#0b0b0d",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(115, 114, 114, 0.5)",
          px: { xs: 2, sm: 3, md: 0 },
          py: { xs: 6, md: 0 },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "90%",
              md: "60%",
            },
            minHeight: {
              xs: "auto",
              md: "10px",
            },
            bgcolor: "#000000",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            py: {
              xs: 5,
              md: "40px",
            },
            px: {
              xs: 2,
              md: 4,
            },
            borderRadius: "20px",
            borderBottom: "2px solid rgba(115, 114, 114, 0.5)",
            borderRight: "2px solid rgba(115, 114, 114, 0.5)",
            borderLeft: "2px solid rgba(115, 114, 114, 0.5)",
          }}
        >
          <Box
            ref={bgRef}
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 0, // 🔥 below glow
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* 🔥 White Blur Patches */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            {/* Top Left Glow */}
            <Box
              sx={{
                position: "absolute",
                top: "-100px",
                left: "400%",
                width: "80px",
                height: "80px",
                background: "rgba(233, 223, 223, 0.10)",
                filter: "blur(120px)",
                borderRadius: "50%",
              }}
            />

            {/* Middle Glow */}
            <Box
              sx={{
                position: "absolute",
                top: "10%",
                left: "%",
                transform: "translate(-50%, -50%)",
                width: "200px",
                height: "500px",
                background: "rgba(160, 157, 157, 0.23)",
                filter: "blur(100px)",
                borderRadius: "50%",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: "10%",
                left: "80%",
                transform: "translate(-50%, -50%)",
                width: "100px",
                height: "500px",
                background: "rgba(160, 157, 157, 0.23)",
                filter: "blur(100px)",
                borderRadius: "50%",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.5px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                  },
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                Have an idea?
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                  },
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                Let's work together
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "grey",
                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                },
                px: { xs: 1, md: 0 },
              }}
            >
              We'll hit you up within 12 hours to get things moving!
            </Typography>
            <Box>
              <Button
                href="#contact"
                variant="contained"
                endIcon={
                  <NorthEastIcon
                    sx={{
                      transition: "transform 0.3s ease",
                    }}
                    className="arrowIcon"
                  />
                }
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "10px",
                  px: {
                    xs: 2.5,
                    md: 3,
                  },
                  py: {
                    xs: 1,
                    md: 1.2,
                  },
                  fontSize: {
                    xs: "0.9rem",
                    md: "1rem",
                  },
                  bgcolor: "#ff4d2d",
                }}
              >
                Let's Talk
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {showBtn && (
        <Box
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            width: 45,
            height: 45,
            borderRadius: "50%",
            bgcolor: "#ff4d2d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 1000,
            boxShadow: "0 10px 25px rgba(255,77,45,0.4)",
            transition: "all 0.3s ease",

            "&:hover": {
              transform: "translateY(-4px) scale(1.1)",
              bgcolor: "#ff6a4a",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Box>
      )}
    </>
  );
};

export default Contact;
