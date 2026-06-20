import { Box, Typography, Button } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const images = [
  "/images/Solidx.png",
  "/images/sapphire.png",
  "/images/radix.png",
  "/images/Maxlife.png",
  "/images/bond.png",
];

const Gallery = () => {
  const loopImages = [...images, ...images];
  return (
    <Box
      sx={{
        minHeight: {
            xs: "auto",
            md: "60vh",
          },
        bgcolor: "#0b0b0d",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, md: 4 },
        py: { xs: 6, md: 4 },
      }}
    >
      {/*  TEXT */}
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "800px",
          mb: 2.8, // spacing between text & slider
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
            background:
              "linear-gradient(0deg, rgba(166,164,159,1) 34%, rgba(255,255,255,1) 79%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Design Gallery
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "rgb(160, 160, 158)",
            mt: 2,
            px: { xs: 1, md: 0 },
            fontSize: {
              xs: "0.9rem",
              md: "1rem",
            },
          }}
        >
          A collection of creative visuals showcasing creative and innovative
          design.
        </Typography>
      </Box>

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
          mb: { xs: 4, md: 8 },
          px: { xs: 2.5, md: 3 },
          py: { xs: 1, md: 1.2 },
          bgcolor: "#ff4d2d",
          "&:hover .arrowIcon": {
            transform: "rotate(45deg) translateY(2px)",
          },
        }}
      >
        View More
      </Button>

      {/* SLIDER */}
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "max-content",
            animation: {
              xs: "scroll 18s linear infinite",
              md: "scroll 25s linear infinite",
            },
          }}
        >
          {loopImages.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              alt="gallery"
              sx={{
                width: {
                  xs: "280px",
                  sm: "340px",
                  md: "450px",
                },
                height: {
                  xs: "220px",
                  sm: "280px",
                  md: "380px",
                },
                objectFit: "cover",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "0.4s ease",

                "&:hover": {
                  transform: "scale(1.03)",
                  borderColor: "#ff4d2d",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* 🔥 animation */}
      <style>
        {`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
      </style>
    </Box>
  );
};

export default Gallery;
