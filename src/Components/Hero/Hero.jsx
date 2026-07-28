import { Box, Typography, Button, Container } from "@mui/material";
import heroImage from "../../assets/sdk.png";
import { useLanguage } from "../../Context/LanguageContext";
import { translations } from "../../data/translations";
import reelvideo from "../../assets/videoSDK.mp4";

function Hero() {

  const { language } = useLanguage();
  const t = translations[language].hero;


  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        minHeight: { xs: "auto", md: "600px" },
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 0 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          gap: 6,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="overline" sx={{ color: "#00AEEF", display: "block", mb: 1 }}>
            {t.overline}
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: "#101828", mb: 2 }}>
            {t.title}
          </Typography>
          <Typography variant="body1" dir="rtl" sx={{ color: "#5C6570", fontSize: "1.1rem", mb: 4, maxWidth: 480,unicodeBidi: "plaintext", }}>
            {t.description}
          </Typography>
          <Box sx={{ display:  "flex",
            gap  : 2 , 
            flexWrap:"wrap",
          }}>

          <Button
            href="#contact"
            variant="contained"
            sx={{
              backgroundColor: "#BC1D7F",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#A50054",
              },
            }}
          >
            {t.ctaContact}
          </Button>


          <Button
          href="#departments"
          variant="contained"
          sx={{
            background:"#1E76BA",
            px: 4,
            py :1.5,
            fontSize:"1rem",
            "&:hover":{
              background:"#00558c"
            },
          }}
          >
           {t.ctaDepartments}
          </Button>
          </Box>
        </Box>

        <Box
          sx={{
                flex: 1,
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
            
          }}
        >
          <Box
            component="video"
            src={reelvideo}
            autoPlay
            loop
            muted
            playsInline
            controls
            preload="auto"
            sx={{
              width: "100%",
              maxWidth: "100%",
              height: { xs: 450, md: 680 },
              objectFit: "cover",
              imageRendering: "high-quality",
              borderRadius: "16px",
              position: "relative",
              zIndex: 2,
              boxShadow: "0 20px 40px rgba(16,24,40,0.15)",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;