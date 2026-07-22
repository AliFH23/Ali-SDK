import { Box, Typography, Container, Stack } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { accreditationsData } from "../../data/accreditationsData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

function Accreditations() {
  const { language } = useLanguage();
  const t = translations[language].accreditations;

  return (
    <Box id="accreditations" sx={{ backgroundColor: "#FAFAFB", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: "#0072BC", display: "block", mb: 1 }}>
          {t.overline}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, color: "#101828", mb: 6 }}
        >
          {t.title}
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          sx={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          {accreditationsData.map((item, index) => {
            const itemText = t.items[index];
            return (
              <Box
                key={item.id}
                sx={{
                  textAlign: "center",
                  width: { xs: "100%", sm: "40%", md: "21%" },
                  minWidth: 200,
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E7E9EC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2.5,
                  }}
                >
                  <VerifiedIcon sx={{ color: "#0072BC", fontSize: 28 }} />
                </Box>
                <Typography
                  sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 600, color: "#101828", mb: 1 }}
                >
                  {itemText.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#5C6570", lineHeight: 1.7 }}>
                  {itemText.description}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}

export default Accreditations;