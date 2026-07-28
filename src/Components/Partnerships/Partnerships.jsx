import { Box, Typography, Container, Grid, Chip, Stack } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { academicPartners, clientsData } from "../../data/partnershipsData";
import { useLanguage } from "../../Context/LanguageContext";
import { translations } from "../../data/translations";

function Partnerships() {
  const { language } = useLanguage();
  const t = translations[language].partnerships;

  return (
    <Box id="partnerships" sx={{ backgroundColor: "#FFFFFF", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: "#D6006D", display: "block", mb: 1 }}>
          {t.overline}
        </Typography>
        <Typography
          variant="h2"
          dir="rtl"
          sx={{ unicodeBidi:"plaintext", fontSize: { xs: "1.75rem", md: "2.25rem" }, color: "#101828", mb: 6 }}
        >
          {t.title}
        </Typography>

        {/* Initiatives */}
        <Typography  sx={{ unicodeBidi:"plaintext", fontWeight: 600, color: "#101828", mb: 3, fontSize: "1.1rem" }}>
          {t.initiativesTitle}
        </Typography>
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {t.initiatives.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack direction="row" spacing={2} sx={{ p: 3, border: "1px solid #E7E9EC", borderRadius: "12px", height: "100%" }}>
                <HandshakeIcon sx={{ color: "#0072BC", flexShrink: 0, mt: 0.3 }} />
                <Box>
                  <Typography  sx={{ unicodeBidi:"plaintext", fontWeight: 600, color: "#101828", mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{unicodeBidi:"plaintext", color: "#5C6570", lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Academic Partners */}
        <Typography  sx={{unicodeBidi:"plaintext", fontWeight: 600, color: "#101828", mb: 3, fontSize: "1.1rem"}}>
          {t.academicTitle}
        </Typography>
        <Stack direction="row"   sx={{unicodeBidi:"plaintext", mb: 8,gap:5, flexWrap: "wrap", alignItems: "space-betwen" }}>
          {academicPartners.map((uni) => (
            <Box
              key={uni.name}
              sx={{
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 1.5,
                border: "1px solid #E7E9EC",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
                
              }}
            >
              <Box
                component="img"
                src={uni.logo}
                alt={uni.name}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          ))}
        </Stack>

        {/* Clients */}
        <Typography sx={{ unicodeBidi:"plaintext", fontWeight: 600, color: "#101828", mb: 3, fontSize: "1.1rem" }}>
          {t.clientsTitle}
        </Typography>
        <Stack direction="row" gap={1.5} sx={{ flexWrap: "wrap" }}>
          {clientsData.map((name) => (
            <Chip
              key={name}
              label={name}
              variant="outlined"
              sx={{
                borderColor: "#E7E9EC",
                color: "#5C6570",
                fontFamily: '"Inter", sans-serif',
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Partnerships;