import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { gsap } from "gsap";
import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
// import TerminalIcon from "@mui/icons-material/Terminal";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        delay: 4.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const navItem = {
    color: "#a1a2a2",
    textTransform: "none",
    fontSize: "1.1rem",
    fontWeight: 500,
    transition: "0.2s",
    "&:hover": {
      color: "#fff",
    },
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Work", id: "work" },
    { name: "Skills", id: "skills" },
    { name: "Gallery", id: "gallery" },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        bgcolor: "#17191c",
        height: "100%",
        color: "#fff",
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => {
                scrollToSection(item.id);
                setMobileOpen(false);
              }}
              sx={{
                "&:hover": {
                  bgcolor: "rgba(255,77,45,0.1)",
                  color: "#ff4d2d",
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 2 }}>
        <Button
          href="#contact"
          variant="contained"
          endIcon={<NorthEastIcon className="arrowIcon" />}
          sx={{
            textTransform: "none",
            borderRadius: "10px",
            px: 3,
            py: 1.2,
            bgcolor: "#ff4d2d",
            "&:hover .arrowIcon": {
              transform: "rotate(45deg) translateY(2px)",
            },
          }}
        >
          {" "}
          Let's Talk{" "}
        </Button>
      </Box>
    </Box>
  );
  return (
    <AppBar
      position="fixed"
      ref={navRef}
      elevation={0}
      sx={{
        top: { xs: 10, md: 20 },
        left: "50%",
        transform: "translateX(-50%)",
        width: { xs: "95%", md: "85%" },
        borderRadius: "15px",
        bgcolor: "rgb(23 25 28)",
        borderBottom: "2px solid rgba(115, 114, 114, 0.5)",

        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: { xs: "70px", md: "70px" },
          px: { xs: 2, md: 3 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CodeIcon
            sx={{
              color: "#ff4d2d",
              fontSize: { xs: 28, md: 36 },
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Portfolio
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 3,
          }}
        >
          <Button onClick={() => scrollToSection("home")} sx={navItem}>
            Home
          </Button>

          <Button onClick={() => scrollToSection("about")} sx={navItem}>
            About
          </Button>

          <Button onClick={() => scrollToSection("work")} sx={navItem}>
            Work
          </Button>

          <Button onClick={() => scrollToSection("skills")} sx={navItem}>
            Skills
          </Button>

          <Button onClick={() => scrollToSection("gallery")} sx={navItem}>
            Gallery
          </Button>

          <Button
            href="#contact"
            variant="contained"
            endIcon={<NorthEastIcon className="arrowIcon" />}
            sx={{
              textTransform: "none",
              borderRadius: "10px",

              bgcolor: "#ff4d2d",
              "&:hover .arrowIcon": {
                transform: "rotate(45deg) translateY(2px)",
              },
            }}
          >
            {" "}
            Let's Talk{" "}
          </Button>
        </Box>
        <IconButton
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#fff",
          }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          PaperProps={{
            sx: {
              bgcolor: "#17191c",
              color: "#fff",
              width: 280,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
