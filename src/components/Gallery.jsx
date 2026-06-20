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
        minHeight: "100vh",
        bgcolor: "#0b0b0d",
        color: "white",
        display: "flex",
        flexDirection: "column", // ✅ important
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        px: 4,
        pt:4
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
          sx={{ color: "rgb(160, 160, 158)", mt: 2 }}
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
          borderRadius: "8px",
          mb:8,
          textTransform: "none",
          fontWeight: 600,
          borderRadius: "10px",
          // px: 3,
          // py: 1.2,
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
            animation: "scroll 25s linear infinite",
          }}
        >
          {loopImages.map((img, i) => (
            <Box
              key={i}
              component="img"
              src={img}
              alt="gallery"
              sx={{
                width: "450px",
                height: "380px",
                objectFit: "cover",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "0.4s ease",

                "&:hover": {
                  transform: "scale(1.05)",
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
