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
        py: 2,
        px: 3,
      }}
    >
      {/* MAIN CONTENT */}
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {/* LEFT */}
         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* <CodeIcon sx={{ color: "#ff4d2d", fontSize: 28 }} /> */}
          <CodeIcon sx={{ color: "#ff4d2d", fontSize: 36 }} />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Portfolio
          </Typography>
        </Box>

        {/* CENTER */}
        <Typography
          sx={{
            fontSize: "14px",
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          © 2026 Swati Sonawane. All rights reserved.
        </Typography>

        {/* RIGHT (ICONS) */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {socials.map((item, i) => (
            <Box
              key={i}
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 38,
                height: 38,
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
