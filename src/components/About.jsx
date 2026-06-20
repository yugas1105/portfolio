import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
// import { FaReact, FaNodeJs, FaGitAlt, FaJava } from "react-icons/fa";
// import { SiGmail, SiGithub, SiInstagram } from "react-icons/si";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import {
//   SiMongodb,
//   SiExpress,
//   SiRedux,
//   SiJavascript,
//   SiMui,
// } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);
  const contactRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
        },
      },
    );

    cardsRef.current.forEach((card) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        },
      );
    });
  }, []);

  const contact = [
    {
      name: "swatikamlakar2005@gmail.com",
      type: "gmail",
      icon: <FaEnvelope />,
      link: "mailto:swatikamlakar2005@gmail.com",
    },
    {
      name: "linkedin.com/in/swati-sonawane",
      type: "linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/swati-sonawane",
    },
    {
      name: "github.com/yugas1105",
      type: "github",
      icon: <FaGithub />,
      link: "https://github.com/yugas1105",
    },
    {
      name: "calmsoul_11.11",
      type: "instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com/calmsoul_11.11",
    },
  ];

  // duplicate for infinite loop
  // const loopSkills = [...skills, ...skills];

  const loopContact = [...contact, ...contact];
  return (
    <Box
      ref={sectionRef}
      sx={{
        minHeight: "100vh",
        bgcolor: "#0b0b0d",
        color: "white",
        display: "flex",
        alignItems: "center",
        // pb: 6,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 8, overflow: "hidden" }}>
          <Box
            ref={contactRef}
            sx={{
              display: "flex",
              gap: 2,
              width: "max-content",
              animation: "scroll 20s linear infinite",
            }}
          >
            {loopContact.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 3,
                    py: 1.2,
                    borderRadius: "30px",
                    bgcolor: "#111114",
                    border: "1px solid #2a2a2f",
                    whiteSpace: "nowrap",
                    transition: "0.3s",
                    fontSize: "18px",
                    cursor: "pointer",
                    "&:hover": {
                      border: "1px solid #ff4d2d",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "18px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </Box>

                  {item.name}
                </Box>
              </a>
            ))}
          </Box>

          {/* animation */}
          <style>
            {`
             @keyframes scroll {
             0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
            }
            `}
          </style>
        </Box>

        <Grid
          container
          spacing={2}
          alignItems="stretch"
          justifyContent="space-between"
        >
          {/* LEFT SIDE */}
          <Grid
            item
            size={{
              xl: 12,
              md: 6,
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: 6,
              pr: 0,
              // ml:2
            }}
          >
            <Typography
              ref={headingRef}
              variant="h4"
              fontWeight={600}
              sx={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.2px",
                fontSize: 40,
              }}
            >
              {/* <span>Turning Ideas into</span> */}
              <span>Passionate about crafting</span>
              <br />
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(0deg, rgba(166,164,159,1) 34%, rgba(255,255,255,1) 79%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {/* Scalable Web Experiences */}
                beautiful and functional
              </Box>
            </Typography>

            <Typography
              ref={textRef}
              sx={{ mt: 3, opacity: 0.8, lineHeight: 1.7, fontSize: 18 }}
            >
              I am a passionate Full-Stack Web Developer with hands-on
              experience in building modern and scalable web applications.
              <br />
              <br />
              Currently working as a Web Developer Intern, I enjoy building
              real-world projects, designing APIs, and solving problems using
              DSA.
            </Typography>
          </Grid>

          {/* RIGHT SIDE - EDUCATION TIMELINE */}
          <Grid
            item
            size={{
              xl: 12,
              md: 6,
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: 4,
              position: "sticky",
              top: "100px",
              height: "fit-content",
            }}
          >
            <Box sx={{ position: "relative", pl: 3 }}>
              {[
                {
                  title: "FRONTEND",
                  subtitle: "UI Development",
                  desc: "Crafting performant, responsive, interfaces with modern frameworks, From SPA's to micro-frontends,I deliver pixel-perfect experiences.",
                  stack: [
                    "React.js",
                    "Redux",
                    "JavaScript",
                    "Material UI",
                    "HTML5",
                    "CSS",
                    "Git",
                    "VS Code",
                  ],
                },
                {
                  title: "BACKEND",
                  subtitle: "Scalable Server Architecture",
                  desc: "Designing robust API's and microservices, From CMS platforms to complex business logic, I build backends that scale.",
                  stack: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "REST APIs",
                    "JWT",
                    "Postman",
                    "GitHub",
                  ],
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  sx={{
                    position: "sticky",
                    top: 100 + index * 0, //  spacing between cards
                    mb: 3, // gives breathing space while scroll

                    transition: "all 0.4s ease",
                  }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      bgcolor: "#111114",
                      color: "#fff",
                      border: "1px solid #727279",
                      borderRadius: 3,
                      transition: "all 0.4s ease",
                      overflow: "hidden",
                      position: "relative",

                      "&:hover": {
                        borderColor: "#ff4d2d",
                        transform: "translateY(-6px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                      },

                      "&:hover .extraContent": {
                        maxHeight: "200px",
                        opacity: 1,
                        mt: 2,
                      },
                    }}
                  >
                    {/* TITLE */}
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      {/* Icon */}
                      <Box
                        sx={{
                          fontSize: "22px",
                          color:
                            item.title === "FRONTEND" ? "#61DBFB" : "#ff4d2d",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {item.title === "FRONTEND" ? <FaCode /> : <FaServer />}
                      </Box>

                      {/* Title */}
                      <Typography fontWeight="bold">{item.title}</Typography>
                    </Box>

                    <Typography
                      fontSize={12}
                      sx={{
                        mt: 0.5,
                        opacity: 0.6,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                    {/* SHORT DESCRIPTION (3 lines) */}
                    <Typography
                      fontSize={13}
                      sx={{
                        mt: 1,
                        opacity: 0.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.desc}
                    </Typography>

                    {/* HIDDEN CONTENT */}
                    <Box
                      className="extraContent"
                      sx={{
                        maxHeight: 0,
                        opacity: 0,
                        overflow: "hidden",
                        transition: "all 0.4s ease",
                      }}
                    >
                      {/* Combined Section */}
                      <Typography
                        fontSize={13}
                        sx={{ mt: 2, color: "#f6573b", fontWeight: 500 }}
                      >
                        Skillsets & Tools
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mt: 1,
                        }}
                      >
                        {item.stack.map((item, i) => (
                          <Box
                            key={i}
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              borderRadius: "12px",
                              bgcolor: "#1a1a1f",
                              fontSize: "12px",
                              transition: "0.3s",
                              fontFamily: "'Inter', sans-serif",
                              letterSpacing: "0.2px",
                              "&:hover": {
                                bgcolor: "#ff4d2d",
                              },
                            }}
                          >
                            {item}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
