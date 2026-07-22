import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import InsightsIcon from "@mui/icons-material/Insights";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

const servicesMeta = [
  { id: "custom-programs", icon: TuneIcon, color: "#D6006D" },
  { id: "accreditations", icon: WorkspacePremiumIcon, color: "#0072BC" },
  { id: "workshops", icon: GroupsIcon, color: "#00AEEF" },
  { id: "consulting", icon: InsightsIcon, color: "#D6006D" },
];

function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  return (
    <Box id="services" sx={{ backgroundColor: "#FAFAFB", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: "#0072BC", display: "block", mb: 1 }}>
          {t.overline}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, color: "#101828", mb: 1 }}>
          {t.title}
        </Typography>
        <Typography sx={{ color: "#5C6570", mb: 6, maxWidth: 560 }}>
          {t.subtitle}
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ justifyContent: "space-between" }}
        >
          {servicesMeta.map((service, index) => {
            const Icon = service.icon;
            const itemText = t.items[index];
            return (
              <Paper
                key={service.id}
                elevation={0}
                sx={{
                  p: 4,
                  width: { xs: "100%", md: "calc(25% - 18px)" },
                  border: "1px solid #E7E9EC",
                  borderRadius: "16px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 32px rgba(16,24,40,0.10)",
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
                    backgroundColor: service.color,
                  }}
                />
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    backgroundColor: `${service.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  <Icon sx={{ color: service.color, fontSize: 26 }} />
                </Box>
                <Typography variant="h4" sx={{ fontSize: "1.1rem", color: "#101828", mb: 1.5 }}>
                  {itemText.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#5C6570", lineHeight: 1.8, fontSize: "0.9rem" }}>
                  {itemText.description}
                </Typography>
              </Paper>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}

export default Services;