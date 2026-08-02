import { Box, Typography, Container, Stack, Paper } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import InsightsIcon from "@mui/icons-material/Insights";
import { useLanguage } from "../../Context/LanguageContext";
import { translations } from "../../data/translations";

const servicesMeta = [
  { id: "custom-programs", icon: TuneIcon, color: "#D6006D" },
  {
    id: "accreditations",
    icon: WorkspacePremiumIcon,
    color: "#0072BC",
  },
  { id: "workshops", icon: GroupsIcon, color: "#00AEEF" },
  { id: "consulting", icon: InsightsIcon, color: "#D6006D" },
];

function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  const isArabic = language === "ar";

  return (
    <Box
      id="services"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        backgroundColor: "#FAFAFB",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* ثابت على اليسار في العربي والإنجليزي */}
        <Typography
          variant="overline"
          dir="ltr"
          sx={{
            color: "#0072BC",
            display: "block",
            mb: 1,
            width: "100%",
            textAlign: "left",
            direction: "ltr",
          }}
        >
          {t.overline}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            color: "#101828",
            mb: 1,
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {t.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#5C6570",

            // فراغ أكبر بين النص والبوكسات
            mb: { xs: 6, md: 8 },

            maxWidth: 560,
            ml: isArabic ? "auto" : 0,
            mr: isArabic ? 0 : "auto",
            textAlign: isArabic ? "right" : "left",
            lineHeight: 1.8,
          }}
        >
          {t.subtitle}
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            justifyContent: "space-between",
            direction: isArabic ? "rtl" : "ltr",

            // بدل spacing حتى يكون الفراغ متساويًا في الاتجاهين
            gap: 3,
          }}
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
                  width: {
                    xs: "100%",
                    md: "calc(25% - 18px)",
                  },
                  minWidth: 0,
                  boxSizing: "border-box",
                  border: "1px solid #E7E9EC",
                  borderRadius: "16px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  textAlign: isArabic ? "right" : "left",
                  direction: isArabic ? "rtl" : "ltr",

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

                    // الأيقونة يمين بالعربي ويسار بالإنجليزي
                    ml: isArabic ? "auto" : 0,
                    mr: isArabic ? 0 : "auto",
                  }}
                >
                  <Icon
                    sx={{
                      color: service.color,
                      fontSize: 26,
                    }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "1.1rem",
                    color: "#101828",
                    mb: 1.5,
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  {itemText.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#5C6570",
                    lineHeight: 1.8,
                    fontSize: "0.9rem",
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
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