import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import profile from "../assets/My Profile.jpeg";
import { gsap } from "gsap";

const Home = () => {
  const imageRef = useRef(null);
  const introRef = useRef(null);
  const headingRef = useRef(null);
  const statsRef = useRef(null);
  const buttonRef = useRef(null);
  const bgRef = useRef(null);
  const mouseRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      gsap.to(mouseRef.current, {
        x: e.clientX - 200,
        y: e.clientY - 200,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.3,
        defaults: { ease: "power3.out" },
      });

      tl.from(imageRef.current, {
        opacity: 0,
        scale: 0.6,
        duration: 0.8,
      })
        .from(introRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
        })
        .from(headingRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
        })
        .from(statsRef.current.children, {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.5,
        })
        .from(buttonRef.current.children, {
          scale: 0.8,
          opacity: 0,
          stagger: 0.2,
          duration: 0.5,
        });
      gsap.to(bgRef.current, {
        backgroundPosition: "80px 80px",
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    // <Box
    //   id="home"
    //   sx={{
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     bgcolor: "rgb(18 19 21)",
    //     color:"#fff"
    //   }}
    // >
    //   <Typography variant="h5" fontWeight="bold" >
    //     Hello, I'm Swati Sonawane 👋
    //   </Typography>

    //   <Typography variant="h6" mt={2}>
    //     React Developer | Web Developer
    //   </Typography>

    //   <Button variant="contained" sx={{ mt: 3 }}>
    //     View My Work
    //   </Button>
    // </Box>

    <Box
      sx={{
        minHeight: {
          xs: "auto",
          md: "100vh",
        },
        bgcolor: "#0b0b0d",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        py: {
          xs: 10,
          md: 0,
        },
        borderBottom: "1px solid rgba(115,114,114,0.5)",
      }}
    >
      {/* Grid Background */}
      <Box
        ref={bgRef}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0, //  below glow
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />
      {/*  White Blur Patches */}
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
            left: "-100px",
            width: {md:"300px"},
            height: {md:"300px"},
            background: "rgba(105, 103, 103, 0.39)",
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
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          width: "100%",
          px: {
            xs: 2,
            sm: 3,
            md: 2,
          },
          pt: {
            xs: "90px",
            md: "120px",
          },
        }}
      >
        <Box
          component="img"
          src={profile}
          ref={imageRef}
          alt="Swati Sonawane"
          sx={{
            width: {
              xs: 100,
              md: 110,
            },
            height: {
              xs: 100,
              md: 110,
            },
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center 15%",
            mx: "auto",
            mb: 2,
          }}
        />

        {/* Small Heading */}
        <Typography
          ref={introRef}
          sx={{
            fontSize: {
              xs: "16px",
              sm: "18px",
              md: "22px",
            },
            mb: 1.5,
            color: "#D1D5DB",
          }}
        >
          Hello, I'm{" "}
          <Box
            component="span"
            sx={{
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Swati Sonawane
          </Box>{" "}
          👋
        </Typography>

        {/* Big Heading */}

        <Typography
          ref={headingRef}
          sx={{
            fontSize: {
              xs: "2.5rem",
              sm: "3rem",
              md: "4rem",
            },
            fontWeight: 600,
            lineHeight: {
              xs: 1.15,
              md: 1,
            },
            letterSpacing: "-0.5px",
            mb: 2,
            color: "#F9FAFB",
            textAlign: "center",
          }}
        >
          <Box component="span" sx={{ display: "block" }}>
            Crafting{" "}
            <Box
              component="span"
              sx={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                background: "linear-gradient(180deg, #d1d5db 0%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              clean code
            </Box>
          </Box>

          <Box component="span" sx={{ display: "block" }}>
            &{" "}
            <Box
              component="span"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(90deg, #ff4d2d, #ff7a45)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              stunning
            </Box>{" "}
            <Box
              component="span"
              sx={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                background: "linear-gradient(180deg, #d1d5db 0%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              interfaces
            </Box>
          </Box>
        </Typography>
        {/* Stats */}
        <Stack
          direction="row"
          ref={statsRef}
          spacing={{
            xs: 2,
            sm: 4,
            md: 5,
          }}
          justifyContent="center"
          alignItems="center"
          sx={{
            mb: 4,
            opacity: 0.8,
            flexWrap: "nowrap",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
              },
              whiteSpace: "nowrap",
            }}
          >
            2
            <Box
              component="span"
              sx={{
                color: "#ff4d2d",
                fontWeight: 600,
                fontSize: {
                  xs: 16,
                  sm: 20,
                },
              }}
            >
              +
            </Box>{" "}
            Years Coding
          </Typography>

          <Typography sx={{
              fontWeight: 500,
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
              },
              whiteSpace: "nowrap",
            }}>
            5
            <Box
              component="span"
              sx={{
                color: "#ff4d2d",
                fontWeight: 600,
                fontSize: {
                  xs: 16,
                  sm: 20,
                },
              }}
            >
              +
            </Box>{" "}
            Projects Built
          </Typography>

          <Typography
            sx={{
              fontWeight: 500,
              fontSize: {
                xs: "0.8rem",
                sm: "1rem",
              },
              whiteSpace: "nowrap",
            }}
          >
            5
            <Box
              component="span"
              sx={{
                color: "#ff4d2d",
                fontWeight: 600,
                fontSize: {
                  xs: 16,
                  sm: 20,
                },
              }}
            >
              +
            </Box>{" "}
            Happy Clients
          </Typography>
        </Stack>

        {/* Buttons */}
        <Stack
          direction={{
            xs: "row",
            sm: "row",
          }}
          spacing={2}
          ref={buttonRef}
          justifyContent="center"
          alignItems="center"
        >
          <Button
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
              borderRadius: "12px",

              bgcolor: "#ff4d2d",

              "&:hover .arrowIcon": {
                transform: "rotate(45deg)",
              },
            }}
          >
            Let's Talk
          </Button>

          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: "12px",
              color: "#E5E7EB",
              borderColor: "rgba(255,255,255,0.2)",
              "&:hover": {
                borderColor: "#fff",
                backgroundColor: "rgba(255,255,255,0.05)",
              },
            }}
          >
            View Resume
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
