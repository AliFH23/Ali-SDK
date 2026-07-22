import { Box,
  Typography,
  Container, 
  Grid, 
  Paper, 
  Stack } from "@mui/material";
import TrendingUp from "@mui/icons-material/TrendingUp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Settings from "@mui/icons-material/Settings";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";



const values = [
  "نشر الوعي",
  "الحرص على جودة المخرجات",
  "المصداقية",
  "الإبداع في الحلول",
];

function About() {

  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <Box id="about" sx={{ backgroundColor: "#FFFFFF", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: "#D6006D", display: "block", mb: 1 }}
        >
          {t.overline}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, color: "#101828", mb: 3 }}>
         {t.title}
        </Typography>
        <Typography
         variant="body1"
          sx={{
            color: "#5C6570",
            fontSize: "1.05rem",
            lineHeight: 1.9,
            maxWidth: 700,
            mx: "auto",
            mb: 8,
            textAlign: "center",
          }}
         >
          {t.description}
        </Typography>

              <Stack spacing={3} sx={{ maxWidth: 700, mx: "auto" }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            border: "1px solid #E7E9EC",
            borderRadius: "12px",
          }}
        >
          <TrendingUp sx={{ color: "#D6006D", fontSize: 32, mb: 2 }} />
          <Typography variant="h4" sx={{ fontSize: "1.15rem", color: "#101828", mb: 1.5 }}>
            {t.vision.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#5C6570", lineHeight: 1.8 }}>
           {t.vision.text}
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            border: "1px solid #E7E9EC",
            borderRadius: "12px",
          }}
        >
          <EmailOutlinedIcon sx={{ color: "#D6006D", fontSize: 32, mb: 2 }} />
          <Typography variant="h4" sx={{ fontSize: "1.15rem", color: "#101828", mb: 1.5 }}>
            {t.mission.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#5C6570", lineHeight: 1.8 }}>
           {t.mission.text}
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            border: "1px solid #E7E9EC",
            borderRadius: "12px",
          }}
        >
          <Settings sx={{ color: "#D6006D", fontSize: 32, mb: 2 }} />
          <Typography variant="h4" sx={{ fontSize: "1.15rem", color: "#101828", mb: 1.5 }}>
            {t.values.title}
          </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5, color: "#5C6570" }}>
                  {t.values.list.map((value) => (
                    <Typography key={value} component="li" variant="body2" sx={{ lineHeight: 2 }}>
                      {value}
                    </Typography>
                  ))}
              </Box>
              </Paper>
            </Stack>
      </Container>
    </Box>
  );
}

export default About;