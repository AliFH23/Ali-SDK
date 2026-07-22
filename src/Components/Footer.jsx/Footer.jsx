import { Box, Typography, Container, Grid, Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../../assets/sdk.png";
import { contactInfo } from "../../data/contactData";
import { useLanguage } from "../../Context/LanguageContext";
import { translations } from "../../data/translations";

const socialLinks = [
  { icon: FacebookIcon, href: "https://www.facebook.com/SDKcompany" },
  { icon: InstagramIcon, href: "https://instagram.com/sdktraining" },
  { icon: LinkedInIcon, href: "https://linkedin.com/company/sdk-training-center" },
];

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const quickLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.departments, href: "#departments" },
    { label: t.nav.accreditations, href: "#accreditations" },
    { label: t.nav.partnerships, href: "#partnerships" },
  ];

  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#1E76BA", color: "#FFFFFF", pt: 3, pb: 1.5 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={logo}
              alt="SDK Training Center"
              sx={{ width: 90, mb: 1.5 }}
            />
            <Typography variant="body2" sx={{ color: "#F3F4F6", lineHeight: 1.7, maxWidth: 320 }}>
              {t.footer.description}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: "1.05rem" }}>
              {t.footer.quickLinksTitle}
            </Typography>
            <Stack spacing={0.8}>
              {quickLinks.map((link) => (
                <Typography
                  key={link.href}
                  component="a"
                  href={link.href}
                  sx={{
                    color: "#F3F4F6",
                    "&:hover": { color: "#FFFFFF", textDecoration: "underline" },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography sx={{ fontWeight: 600, mb: 1.5, fontSize: "1.05rem" }}>
              {t.footer.contactTitle}
            </Typography>
            <Stack spacing={0.8} sx={{ mb: 2 }}>
              <Typography sx={{ color: "#F3F4F6" }}>{contactInfo.phone}</Typography>
              <Typography sx={{ color: "#F3F4F6" }}>{contactInfo.email}</Typography>
              <Typography sx={{ color: "#F3F4F6" }}>{contactInfo.address}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <IconButton
                    key={index}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "#FFFFFF",
                      "&:hover": { backgroundColor: "#BC1D7F" },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 3,
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#F3F4F6" }}>
            © {new Date().getFullYear()} SDK Training Center — {t.footer.rights}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;