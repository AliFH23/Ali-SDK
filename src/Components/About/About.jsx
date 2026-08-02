import {
  Box,
  Typography,
  Container,
  Paper,
  Stack,
} from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

import { useLanguage } from "../../Context/LanguageContext";
import { translations } from "../../data/translations";

function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const isArabic = language === "ar";

  const cards = [
    {
      title: t.vision.title,
      text: t.vision.text,
      icon: TrendingUpIcon,
      color: "#D6006D",
    },
    {
      title: t.mission.title,
      text: t.mission.text,
      icon: EmailOutlinedIcon,
      color: "#0072BC",
    },
  ];

  return (
    <Box
      id="about"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            color: "#D6006D",
            display: "block",
            mb: 1,
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {t.overline}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            color: "#101828",
            mb: 3,
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {t.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#5C6570",
            fontSize: "1.05rem",
            lineHeight: 1.9,
            maxWidth: 760,
            mx: "auto",
            mb: 8,
            textAlign: "center",
          }}
        >
          {t.description}
        </Typography>

        <Stack
          spacing={3}
          sx={{
            maxWidth: 760,
            mx: "auto",
          }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  border: "1px solid #E7E9EC",
                  borderRadius: "16px",
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#FFFFFF",
                  textAlign: isArabic ? "right" : "left",
                  transition:
                    "transform 0.25s ease, box-shadow 0.25s ease",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 16px 35px rgba(16,24,40,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    backgroundColor: card.color,
                  }}
                />

                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    backgroundColor: `${card.color}14`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                    ml: isArabic ? "auto" : 0,
                    mr: isArabic ? 0 : "auto",
                  }}
                >
                  <Icon
                    sx={{
                      color: card.color,
                      fontSize: 28,
                    }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "1.15rem",
                    color: "#101828",
                    mb: 1.5,
                    fontWeight: 700,
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#5C6570",
                    lineHeight: 1.9,
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  {card.text}
                </Typography>
              </Paper>
            );
          })}

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              border: "1px solid #E7E9EC",
              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#FFFFFF",
              textAlign: isArabic ? "right" : "left",
              transition:
                "transform 0.25s ease, box-shadow 0.25s ease",

              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 16px 35px rgba(16,24,40,0.08)",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "4px",
                backgroundColor: "#00AEEF",
              }}
            />

            <Box
              sx={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                backgroundColor: "#00AEEF14",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2.5,
                ml: isArabic ? "auto" : 0,
                mr: isArabic ? 0 : "auto",
              }}
            >
              <SettingsIcon
                sx={{
                  color: "#00AEEF",
                  fontSize: 28,
                }}
              />
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontSize: "1.15rem",
                color: "#101828",
                mb: 2,
                fontWeight: 700,
                textAlign: isArabic ? "right" : "left",
              }}
            >
              {t.values.title}
            </Typography>

            <Stack spacing={1.2}>
              {t.values.list.map((value) => (
                <Box
                  key={value}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    flexDirection: isArabic ? "row" : "row",
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#00AEEF",
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#5C6570",
                      lineHeight: 1.8,
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {value}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;