import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const Skills = () => {
  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express",
    "JavaScript",
    "Material UI",
    "Git",
    "REST APIs",
  ];

  const skillGroups = [
    {
      title: "Frontend",
      items: ["React", "Redux", "MUI", "HTML", "CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express"],
    },
    {
      title: "Languages",
      items: ["JavaScript", "Java", "C", "C++"],
    },
    {
      title: "Database",
      items: ["MongoDB", "SQL Server"],
    },

    {
      title: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code"],
    },
    {
      title: "Core",
      items: ["DSA"],
    },
  ];
  const education = [
    {
      title: "B.Tech in Computer Science",
      year: "2023 - 2027",
      desc: "Focused on full-stack development & core CS concepts",
    },
    {
      title: "Higher Secondary (HSC)",
      year: "2022 - 2023",
      desc: "Strengthened analytical & problem-solving skills",
    },
    {
      title: "Secondary School (SSC)",
      year: "2020 - 2021",
      desc: "Built strong academic foundation",
    },
  ];

  return (
    <>
      <Box
        sx={{
          minHeight: {
            xs: "auto",
            md: "100vh",
          },
          bgcolor: "#0b0b0d",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          px: { xs: 2, sm: 3, md: 7 },
          py: { xs: 6, md: 0 },
        }}
      >
        <Grid
          container
          spacing={{
            xs: 5,
            md: 2,
          }}
        >
          {/* 🔥 LEFT - SKILLS */}

          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  mb: { xs: 3, md: 4 },
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                  },
                  background:
                    "linear-gradient(0deg, rgba(166,164,159,1), rgba(255,255,255,1))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Tech Stack
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                  },
                  gap: 3,
                }}
              >
                {skillGroups.map((group, i) => (
                  <Box key={i}>
                    {/* CATEGORY */}
                    <Typography
                      sx={{
                        mb: 1,
                        fontSize: {
                          xs: "16px",
                          md: "18px",
                        },
                        opacity: 0.6,
                        letterSpacing: "1px",
                      }}
                    >
                      {group.title}
                    </Typography>

                    {/* SKILLS */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {group.items.map((skill, j) => (
                        <Box
                          key={j}
                          sx={{
                            px: { xs: 1.5, md: 2 },
                            py: { xs: 0.7, md: 1 },
                            fontSize: {
                              xs: "12px",
                              md: "13px",
                            },
                            borderRadius: "20px",

                            bgcolor: "#111114",
                            border: "1px solid #2a2a2f",
                            transition: "0.3s",
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: "-0.5px",
                            "&:hover": {
                              bgcolor: "#ff4d2d",
                              transform: "translateY(-3px)",
                            },
                          }}
                        >
                          {skill}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                py: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  py: 4,
                }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: "#22c55e",
                    animation: "pulse 1.5s infinite",

                    "@keyframes pulse": {
                      "0%": { opacity: 1, transform: "scale(1)" },
                      "50%": { opacity: 0.5, transform: "scale(1.5)" },
                      "100%": { opacity: 1, transform: "scale(1)" },
                    },
                  }}
                />

                <Typography
                  sx={{
                    color: "#888",
                    fontFamily: "monospace",
                    fontSize: {
                      xs: "0.8rem",
                      md: "1rem",
                    },
                    textAlign: "center",
                  }}
                >
                  Currently Building Full Stack Applications...
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: "250px",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, #ff4d2d, transparent)",
                  boxShadow: "0 0 20px #ff4d2d",
                }}
              />
            </Box>
          </Grid>

          {/* 🔥 RIGHT - EDUCATION TIMELINE */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                mb: { xs: 3, md: 4 },
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                },
                background:
                  "linear-gradient(0deg, rgba(166,164,159,1), rgba(255,255,255,1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Education
            </Typography>

            <Box sx={{ position: "relative", pl: { xs: 2, md: 3 } }}>
              {/* Vertical line */}
              <Box
                sx={{
                  position: "absolute",
                  left: 10,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  height: {
                    xs: "100%",
                    md: "400px",
                  },
                  left: {
                    xs: 6,
                    md: 10,
                  },
                  bgcolor: "#ff4d2d",
                }}
              />

              {education.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "sticky",

                    top: 100,
                    mb: 1,
                    zIndex: index, //  stacking order
                  }}
                >
                  <Paper
                    sx={{
                      p: { xs: 2, md: 3 },
                      ml: { xs: 0.5, md: 1 },
                      bgcolor: "#111114",
                      border: "1px solid #2a2a2f",
                      borderRadius: 3,

                      color: "#fff",
                      transition: "0.4s ease",

                      //  slight offset for visual stacking
                      transform: {
                        xs: "none",
                        md: `translateY(${index * 10}px)`,
                      },
                    }}
                  >
                    <Typography fontWeight="bold">{item.title}</Typography>
                    <Typography fontSize={13} sx={{ opacity: 0.6 }}>
                      {item.year}
                    </Typography>
                    <Typography fontSize={13} sx={{ mt: 1, opacity: 0.7 }}>
                      {item.desc}
                    </Typography>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Skills;
