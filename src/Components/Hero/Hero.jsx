import { Box, Typography, Button, Container } from "@mui/material";
import { useLanguage } from "../../Context/LanguageContext";
import { translations } from "../../data/translations";
import reelvideo from "../../assets/videoSDK.mp4";

function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const isArabic = language === "ar";

  const buttonStyles = {
    minWidth: { xs: "100%", sm: 160 },
    height: 52,
    px: 4,
    fontSize: "1rem",
    fontWeight: 700,
    borderRadius: "10px",
    textTransform: "none",
  };

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
        dir="ltr"
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          gap: 6,
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Text */}
        <Box
          dir={isArabic ? "rtl" : "ltr"}
          sx={{
            flex: 1,
            width: "100%",
            textAlign: isArabic ? "right" : "left",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              display: "block",
              width: "100%",
              color: "#00AEEF",
              mb: 1,
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {t.overline}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              color: "#101828",
              mb: 2,
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {t.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#5C6570",
              fontSize: "1.1rem",
              mb: 4,
              maxWidth: 480,
              lineHeight: 1.8,
              textAlign: isArabic ? "right" : "left",
              ml: isArabic ? "auto" : 0,
              mr: isArabic ? 0 : "auto",
            }}
          >
            {t.description}
          </Typography>

          <Box
            dir="ltr"
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: 2,
              flexWrap: "wrap",
              justifyContent: isArabic ? "flex-end" : "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            {isArabic ? (
              <>
                <Button
                  href="#departments"
                  variant="contained"
                  sx={{
                    ...buttonStyles,
                    backgroundColor: "#1E76BA",
                    boxShadow: "0 6px 14px rgba(30,118,186,0.22)",

                    "&:hover": {
                      backgroundColor: "#00558C",
                      boxShadow: "0 8px 18px rgba(30,118,186,0.30)",
                    },
                  }}
                >
                  {t.ctaDepartments}
                </Button>

                <Button
                  href="#contact"
                  variant="contained"
                  sx={{
                    ...buttonStyles,
                    backgroundColor: "#BC1D7F",
                    boxShadow: "0 6px 14px rgba(188,29,127,0.22)",

                    "&:hover": {
                      backgroundColor: "#A50054",
                      boxShadow: "0 8px 18px rgba(188,29,127,0.30)",
                    },
                  }}
                >
                  {t.ctaContact}
                </Button>
              </>
            ) : (
              <>
                <Button
                  href="#contact"
                  variant="contained"
                  sx={{
                    ...buttonStyles,
                    backgroundColor: "#BC1D7F",
                    boxShadow: "0 6px 14px rgba(188,29,127,0.22)",

                    "&:hover": {
                      backgroundColor: "#A50054",
                      boxShadow: "0 8px 18px rgba(188,29,127,0.30)",
                    },
                  }}
                >
                  {t.ctaContact}
                </Button>

                <Button
                  href="#departments"
                  variant="contained"
                  sx={{
                    ...buttonStyles,
                    backgroundColor: "#1E76BA",
                    boxShadow: "0 6px 14px rgba(30,118,186,0.22)",

                    "&:hover": {
                      backgroundColor: "#00558C",
                      boxShadow: "0 8px 18px rgba(30,118,186,0.30)",
                    },
                  }}
                >
                  {t.ctaDepartments}
                </Button>
              </>
            )}
          </Box>
        </Box>

        {/* Video */}
        <Box
          dir="ltr"
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: 360, md: 500 },
              height: { xs: 520, md: 620 },

              pt: { xs: 2.5, md: 3.5 },
              pb: { xs: 2.5, md: 3.5 },
              px: 0,

              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(16,24,40,0.15)",
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
                height: "100%",
                display: "block",
                objectFit: "cover",
                objectPosition: "center",
                backgroundColor: "#FFFFFF",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;