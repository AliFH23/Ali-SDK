import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import { useLanguage } from "../../Context/LanguageContext";


import { translations } from "../../data/translations";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();


  const t = translations[language];

  const navLinks = [
  { label: t.nav.home, id: "home" },
  { label: t.nav.about, id: "about" },
  { label: t.nav.services, id: "services" },
  { label: t.nav.departments, id: "departments" },
  { label: t.nav.accreditations, id: "accreditations" },
  { label: t.nav.partnerships, id: "partnerships" },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          backgroundColor: "#1E76BA",
          justifyContent: "space-between",
          height: 100,
          px: 4,
        }}
      >
        <Box sx={{
          
        }}>
          <img
            src="../../../src/assets/sdk.png"
            alt="logo"
            loading="lazy"
            width={120}
            height={120}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          {navLinks.map((link) => (
            <Button
              key={link.id}
              href={`#${link.id}`}
              sx={{
                color: "#FFFFFF",
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                "&:hover": {
                  color: "#00AEEF",
                },
              }}
            >
              {link.label}
            </Button>
          ))}

          <Box
            onClick={toggleLanguage}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
              px: 1.5,
              py: 0.5,
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.4)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "0.85rem",
                fontWeight: language === "ar" ? 700 : 400,
                opacity: language === "ar" ? 1 : 0.6,
              }}
            >
              عربي
            </Typography>
            <Typography sx={{ color: "#FFFFFF", opacity: 0.5 }}>/</Typography>
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: "0.85rem",
                fontWeight: language === "en" ? 700 : 400,
                opacity: language === "en" ? 1 : 0.6,
              }}
            >
              EN
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;