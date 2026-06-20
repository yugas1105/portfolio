import { Box, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CodeIcon from "@mui/icons-material/Code";

const Footer = () => {
  const socials = [
    {
      icon: <MailIcon fontSize="small" />,
      link: "mailto:swatikamlakar2005@gmail.com",
    },
    {
      icon: <GitHubIcon fontSize="small" />,
      link: "https://github.com/yugas1105",
    },
    {
      icon: <LinkedInIcon fontSize="small" />,
      link: "https://linkedin.com/in/swati-sonawane-11nov2005",
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: "https://instagram.com/calmsoul_11.11",
    },
  ];
  return (
    <Box
      sx={{
        bgcolor: "#0b0b0d",
        color: "#fff",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        py: {
          xs: 3,
          md: 2,
        },
        px: {
          xs: 2,
          md: 3,
        },
      }}
    >
      {/* MAIN CONTENT */}
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          gap: {
            xs: 2,
            md: 3,
          },
          textAlign: "center",
        }}
      >
        {/* LEFT */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <CodeIcon
            sx={{
              color: "#ff4d2d",
              fontSize: {
                xs: 28,
                md: 36,
              },
            }}
          />

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: "1.2rem",
                md: "1.5rem",
              },
            }}
          >
            Portfolio
          </Typography>
        </Box>

        {/* CENTER */}
        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              md: "14px",
            },
            opacity: 0.6,
            textAlign: "center",
            order: {
              xs: 3,
              md: 2,
            },
          }}
        >
          © 2026 Swati Sonawane. All rights reserved.
        </Typography>
        {/* RIGHT (ICONS) */}
        <Box
          sx={{
            display: "flex",
            gap: {
              xs: 1.5,
              md: 2,
            },
            order: {
              xs: 2,
              md: 3,
            },
          }}
        >
          {socials.map((item, i) => (
            <Box
              key={i}
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: {
                  xs: 34,
                  md: 38,
                },
                height: {
                  xs: 34,
                  md: 38,
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff",

                "&:hover": {
                  bgcolor: "#ff4d2d",
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px rgba(255,77,45,0.3)",
                },
              }}
            >
              {item.icon}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
