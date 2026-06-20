import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import foodImg from "../assets/Food.png";
import swachh from "../assets/Swachh.png";
import accounting from "../assets/Accounting.png";
import internship from "../assets/Internship.png";

// const projects = [
//   {
//     title: "Food Ordering App",
//     image: foodImg,
//     category: "Full Stack",
//     description:
//       "Full-stack food ordering platform with authentication, cart management, order tracking, and payment integration.",
//   },
//   {
//     title: "Swachh Polymers",
//     image: swachh,
//     category: "Business Website",
//     description:
//       "Modern responsive company website showcasing products, services, and business information.",
//   },
//   {
//     title: "Accounting System",
//     image: accounting,
//     category: "Full Stack",
//     description:
//       "Inventory and accounting management system with analytics, reporting, and role-based access.",
//   },
//   {
//     title: "Prashikhan",
//     image: internship,
//     category: "Web App Design",
//     description:
//       "Internship portal connecting students and companies with application and management features.",
//   },
// ];

const projects = [
 {
  title: "Food Ordering App",
  image: foodImg,
  category: "Full Stack",

  description:
    "A modern food ordering platform that enables customers to explore menus, place orders, make secure online payments, and track their orders seamlessly.",

  tagline:
    "Delivering a seamless digital dining experience with real-time ordering and management.",

  overview:
    "Developed a full-stack food ordering application designed to streamline restaurant operations and enhance customer experience. The platform provides an intuitive interface for browsing food categories, managing carts, placing orders, and tracking order status, while administrators can efficiently manage products, customers, and orders through a dedicated dashboard.",

  problem:
    "Many local restaurants rely on manual order management, resulting in inefficient workflows, delayed order processing, and limited visibility into customer activities.",

  solution:
    "Built a centralized web application with role-based access, secure authentication, real-time order management, and integrated online payments to automate restaurant operations and improve customer engagement.",

  features: [
    "Secure JWT Authentication",
    "Role-Based User & Admin Access",
    "Dynamic Menu & Category Management",
    "Shopping Cart Functionality",
    "Real-Time Order Tracking",
    "Razorpay Payment Integration",
    "Customer & Order Management Dashboard",
    "Responsive Mobile-Friendly Design"
  ],

  impact: [
    "Automated restaurant order management",
    "Improved customer ordering experience",
    "Reduced manual operational workload",
    "Enhanced order tracking and transparency"
  ],

  technologies: [
    "React.js",
    "Redux Toolkit",
    "Material UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Razorpay"
  ],

  duration: "3 Months",

  role: "Full Stack Developer",

  github: "https://github.com/yugas1105",
  liveLink: "https://food-app-demo.com",
},
  {
  title: "Swachh Polymers",
  image: swachh,
  category: "Business Website",

  description:
    "A professional corporate website designed to showcase products, services, and company information while strengthening the brand's digital presence.",

  tagline:
    "Empowering industrial growth through a modern and impactful digital experience.",

  overview:
    "Developed a responsive business website for Swachh Polymers to establish a strong online presence and effectively present the company's products, services, and industry expertise. The website focuses on clean design, intuitive navigation, and seamless user experience across all devices.",

  problem:
    "The company lacked a modern digital platform to showcase its product portfolio, communicate its services, and generate business inquiries from potential customers.",

  solution:
    "Built a responsive and visually appealing corporate website that highlights the company's offerings, improves accessibility to business information, and provides a streamlined way for customers to connect with the organization.",

  features: [
    "Responsive Mobile-First Design",
    "Product & Service Showcase",
    "Company Profile & About Section",
    "Contact & Inquiry Forms",
    "SEO-Friendly Structure",
    "Fast Loading Performance",
    "Modern UI/UX Design",
    "Cross-Browser Compatibility"
  ],

  impact: [
    "Enhanced online brand visibility",
    "Improved customer engagement",
    "Simplified product discovery",
    "Increased business inquiry opportunities"
  ],

  technologies: [
    "React.js",
    "Material UI",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Design"
  ],

  duration: "1 Month",

  role: "Frontend Developer",

  github: "https://github.com/yugas1105",
  liveLink: "https://swachhpolymers.com/",
},
 {
  title: "Accounting System",
  image: accounting,
  category: "Full Stack",

  description:
    "A comprehensive accounting and inventory management system designed to streamline financial operations, stock management, and business reporting through a centralized digital platform.",

  tagline:
    "Simplifying business finance, inventory tracking, and decision-making through automation.",

  overview:
    "Developed a full-stack accounting and inventory management solution that enables businesses to manage products, stock levels, sales, purchases, customers, vendors, and financial records from a single dashboard. The system provides real-time insights through analytics and reports, helping organizations make informed business decisions.",

  problem:
    "Small and medium-sized businesses often rely on spreadsheets and manual processes to manage inventory and financial records, leading to errors, inefficiencies, and limited visibility into business performance.",

  solution:
    "Built a centralized platform that automates inventory tracking, transaction management, financial reporting, and business analytics while providing secure role-based access for different users.",

  features: [
    "Inventory & Stock Management",
    "Sales & Purchase Tracking",
    "Customer & Vendor Management",
    "Role-Based Authentication",
    "Financial Reports & Analytics",
    "Dashboard with Business Insights",
    "Transaction History Management",
    "Responsive Admin Interface"
  ],

  impact: [
    "Reduced manual accounting efforts",
    "Improved inventory visibility and control",
    "Enabled data-driven business decisions",
    "Centralized financial and operational records"
  ],

  technologies: [
    "React.js",
    "Material UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Chart.js"
  ],

  duration: "4 Months",

  role: "Full Stack Developer",

  github: "https://github.com/yugas1105",
  liveLink: "https://accounting-demo.com",
},
 {
  title: "Prashikhan",
  image: internship,
  category: "Web Application",

  description:
    "A comprehensive internship and training management platform that connects students, colleges, and organizations while simplifying the internship application and tracking process.",

  tagline:
    "Bridging the gap between students and career opportunities through a unified digital platform.",

  overview:
    "Developed a full-stack internship management system that enables students to discover opportunities, apply for internships, track application status, and manage their profiles. The platform also provides organizations with tools to post internships, review applications, and manage candidates efficiently.",

  problem:
    "Students often struggle to find relevant internship opportunities, while organizations face challenges in managing applications through scattered communication channels and manual processes.",

  solution:
    "Built a centralized platform that streamlines internship discovery, application management, candidate tracking, and communication between students and recruiters, improving the overall recruitment workflow.",

  features: [
    "Student Registration & Profile Management",
    "Internship Listings & Search",
    "Online Application Submission",
    "Application Status Tracking",
    "Company Dashboard",
    "Internship Posting & Management",
    "Candidate Review System",
    "Responsive User Interface"
  ],

  impact: [
    "Simplified internship application process",
    "Improved accessibility to career opportunities",
    "Reduced manual recruitment efforts",
    "Enhanced collaboration between students and organizations"
  ],

  technologies: [
    "React.js",
    "Material UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication"
  ],

  duration: "2 Months",

  role: "Full Stack Developer",

  github: "https://github.com/yugas1105",
  liveLink: "https://prashikhan-demo.com",
},
];

const cardStyle = {
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  cursor: "pointer",
  bgcolor: "#111114",
  border: "1px solid rgba(255,255,255,0.08)",
  transition: "all 0.4s ease",
  height: "100%",

  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: `
      0 0 30px rgba(245,240,239,0.15),
      0 10px 40px rgba(50,50,50,0.6)
    `,
  },

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "20px",
    padding: "1px",
    background: "linear-gradient(120deg, transparent, #ff4d2d, transparent)",
    WebkitMask:
      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    opacity: 0,
    transition: "0.4s",
  },

  "&:hover::before": {
    opacity: 1,
  },

  "&:hover .project-image": {
    transform: "scale(1.05)",
  },
};

const Work = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);
  return (
    <Box
      id="work"
      sx={{
        bgcolor: "#0b0b0d",
        color: "#fff",
        py: { xs: 6, md: 4 },
        px: { xs: 2, sm: 4, md: 8, lg: 12 },
      }}
    >
      {/* Heading */}
      <Box textAlign="center" mb={{ xs: 5, md: 6 }}>
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 600,
            background:
              "linear-gradient(0deg, rgba(166,164,159,1) 34%, rgba(255,255,255,1) 79%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Selected Projects
        </Typography>

        <Typography
          sx={{
            color: "#a0a0a0",
            mt: 1,
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          Explore my projects to experience innovative design and development.
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {projects.map((project, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Card sx={cardStyle}>
              {/* Image */}
              <Box
                sx={{
                  position: "relative",
                  height: {
                    xs: 280,
                    sm: 350,
                    md: 380,
                    lg: 380,
                  },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.6s ease",
                  }}
                />

                {/* Dark Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                  }}
                />

                {/* Project Title */}
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: {
                      xs: "1.2rem",
                      md: "1.5rem",
                    },
                    zIndex: 2,
                    textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                  }}
                >
                  {project.title}
                </Typography>
              </Box>

              {/* Content */}
              <CardContent
                sx={{
                  p: { xs: 2, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Chip
                  label={project.category}
                  variant="outlined"
                  size="small"
                  sx={{
                    width: "fit-content",
                    mb: 2,
                    color: "#fff",
                    borderColor: "#666",
                  }}
                />

                <Typography
                  sx={{
                    opacity: 0.75,
                    lineHeight: 1.7,
                    color: "#b0b0b0",

                    fontSize: {
                      xs: "13px",
                      md: "14px",
                    },
                  }}
                >
                  {project.description}
                </Typography>

                <Button
                  onClick={() => setSelectedProject(project)}
                  sx={{
                    mt: 2,
                    width: "fit-content",
                    color: "#ff4d2d",
                    textTransform: "none",
                    fontWeight: 600,
                    p: 0,
                  }}
                >
                  View Project →
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        maxWidth="md"
        fullWidth
        BackdropProps={{
          sx: {
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(0,0,0,0.7)",
          },
        }}
        PaperProps={{
          sx: {
            bgcolor: "#111114",
            color: "#fff",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          },
        }}
      >
        {selectedProject && (
          <>
            {/* Header */}
            <Box
              sx={{
                p: 3,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                position: "relative",
              }}
            >
              <IconButton
                onClick={() => setSelectedProject(null)}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>

              <Chip
                label={selectedProject.category}
                size="small"
                sx={{
                  bgcolor: "#ff4d2d20",
                  color: "#ff4d2d",
                  mb: 2,
                }}
              />

              <Typography
                variant="h4"
                fontWeight={700}
                sx={{
                  mb: 1,
                }}
              >
                {selectedProject.title}
              </Typography>

              <Typography
                sx={{
                  color: "#9ca3af",
                  lineHeight: 1.8,
                }}
              >
                {selectedProject.description}
              </Typography>
            </Box>

            <DialogContent sx={{ p: 4 }}>
              {/* Overview */}
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Project Overview
              </Typography>

              <Typography
                sx={{
                  color: "#b0b0b0",
                  lineHeight: 1.9,
                  mb: 4,
                }}
              >
                {selectedProject.overview}
              </Typography>

              {/* Problem */}
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Problem
              </Typography>

              <Typography
                sx={{
                  color: "#b0b0b0",
                  lineHeight: 1.9,
                  mb: 4,
                }}
              >
                {selectedProject.problem}
              </Typography>

              {/* Solution */}
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Solution
              </Typography>

              <Typography
                sx={{
                  color: "#b0b0b0",
                  lineHeight: 1.9,
                  mb: 4,
                }}
              >
                {selectedProject.solution}
              </Typography>

              {/* Features */}
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Key Features
              </Typography>

              <Box sx={{ mb: 4 }}>
                {selectedProject.features?.map((feature) => (
                  <Typography
                    key={feature}
                    sx={{
                      color: "#b0b0b0",
                      mb: 1,
                    }}
                  >
                    ✓ {feature}
                  </Typography>
                ))}
              </Box>

              {/* Tech Stack */}
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Technologies Used
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  mb: 4,
                }}
              >
                {selectedProject.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      bgcolor: "#1d1d21",
                      color: "#fff",
                    }}
                  />
                ))}
              </Box>

              {/* Stats */}
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  flexWrap: "wrap",
                  p: 2,
                  borderRadius: "12px",
                  bgcolor: "#1a1a1f",
                  mb: 4,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#ff4d2d",
                      fontSize: "0.85rem",
                    }}
                  >
                    Role
                  </Typography>
                  <Typography>{selectedProject.role}</Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#ff4d2d",
                      fontSize: "0.85rem",
                    }}
                  >
                    Duration
                  </Typography>
                  <Typography>{selectedProject.duration}</Typography>
                </Box>
              </Box>

              {/* Buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  href={selectedProject.liveLink}
                  target="_blank"
                  sx={{
                    bgcolor: "#ff4d2d",
                    textTransform: "none",
                    px: 3,
                  }}
                >
                  Live Demo
                </Button>

                <Button
                  variant="outlined"
                  href={selectedProject.github}
                  target="_blank"
                  sx={{
                    color: "#fff",
                    borderColor: "#555",
                    textTransform: "none",
                    px: 3,
                  }}
                >
                  GitHub
                </Button>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Work;
