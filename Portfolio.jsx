import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Chip,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Swati Sonawane
          </Typography>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box width={250} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {["Projects", "Skills", "Contact", "Blog"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Container sx={{ py: 4 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" gutterBottom fontWeight={600}>
            Swati Sonawane
          </Typography>
          <Typography variant="body1" maxWidth="md" mx="auto">
            I’m a passionate and curious full-stack web developer with hands-on experience in building responsive and scalable web applications using React, JavaScript, Node.js, and MongoDB.
          </Typography>
          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            href="/Swati_Sonawane_Resume.pdf"
            download
          >
            Download Resume
          </Button>
        </Box>

        <Box mb={6}>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Projects
          </Typography>
          <Grid container spacing={3}>
            {/* Project Cards Here (unchanged) */}
          </Grid>
        </Box>

        <Box mb={6}>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Current Focus
          </Typography>
          <ul>
            <li>Mastering DSA in Java</li>
            <li>Studying Operating Systems</li>
            <li>Exploring Probability & Statistics</li>
          </ul>
        </Box>

        <Box mb={6}>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Skills
          </Typography>
          <Grid container spacing={2}>
            {["React", "Node.js", "JavaScript", "MongoDB", "HTML & CSS", "Material UI"].map((skill) => (
              <Grid item key={skill}>
                <Chip label={skill} variant="outlined" color="primary" />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mb={6}>
          <Typography variant="h5" gutterBottom fontWeight={600}>
            Blog / Testimonials
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  “Swati has a great understanding of full-stack development and delivers clean, optimized code.” – Peer Review
                </Typography>
                <Typography variant="body2">
                  Stay tuned for upcoming blog posts on mastering DSA, building scalable backends, and UI design best practices.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  "Her project architecture and clean code practices truly reflect professionalism." – Code Mentor
                </Typography>
                <Typography variant="body2">
                  Blog coming soon: How I structured my MERN stack project for performance and scalability.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  "Swati’s UI/UX work is both intuitive and beautiful." – Frontend Colleague
                </Typography>
                <Typography variant="body2">
                  Upcoming blog: 7 React & Material-UI patterns for cleaner design systems.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box textAlign="center">
          <Typography variant="body1" mb={2}>
            Let’s connect and build something amazing together!
          </Typography>
          <Button variant="contained" color="primary" href="mailto:swati@example.com">
            Contact Me
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
