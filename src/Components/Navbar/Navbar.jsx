import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useLanguage } from "../../Context/LanguageContext";
import logo from "../../assets/sdk.png";
import { translations } from "../../data/translations";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [openMenu, setOpenMenu] = useState(false);

  const t = translations[language];
  const isArabic = language === "ar";

  const navLinks = [
    { label: t.nav.home, id: "home" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.services, id: "services" },
    { label: t.nav.departments, id: "departments" },
    { label: t.nav.accreditations, id: "accreditations" },
    { label: t.nav.partnerships, id: "partnerships" },
  ];

  const displayLinks = navLinks;

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#1E76BA",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            height: {
              xs: 70,
              md: 100,
            },
            px: {
              xs: 2,
              md: 4,
            },
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="SDK Logo"
            sx={{
              width: {
                xs: 80,
                md: 120,
              },
              height: "auto",
              flexShrink: 0,
            }}
          />

          {/* Desktop Menu */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              gap: 2,
            }}
          >
            {displayLinks.map((link) => (
              <Button
                key={link.id}
                href={`#${link.id}`}
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  whiteSpace: "nowrap",

                  "&:hover": {
                    color: "#00AEEF",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}

            {/* Language Button - ثابت */}
            <Box
              onClick={toggleLanguage}
              sx={{
                display: "flex",
                alignItems: "center",
                direction: "ltr",
                gap: 0.5,
                cursor: "pointer",
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                border: "1px solid rgba(255,255,255,0.4)",
                flexShrink: 0,

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: isArabic ? 700 : 400,
                  opacity: isArabic ? 1 : 0.6,
                }}
              >
                ع
              </Typography>

              <Typography
                sx={{
                  color: "#fff",
                  opacity: 0.5,
                }}
              >
                /
              </Typography>

              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: !isArabic ? 700 : 400,
                  opacity: !isArabic ? 1 : 0.6,
                }}
              >
                E
              </Typography>
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            onClick={() => setOpenMenu(true)}
            aria-label="open navigation menu"
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              color: "#fff",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor= "right" 
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <Box
          dir={isArabic ? "rtl" : "ltr"}
          sx={{
            width: 260,
            pt: 2,
          }}
        >
          <List>
            {displayLinks.map((link) => (
              <ListItem key={link.id} disablePadding>
                <ListItemButton
                  component="a"
                  href={`#${link.id}`}
                  onClick={() => setOpenMenu(false)}
                  sx={{
                    textAlign: isArabic ? "right" : "left",
                    px: 3,
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      textAlign: isArabic ? "right" : "left",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  toggleLanguage();
                  setOpenMenu(false);
                }}
                sx={{
                  textAlign: isArabic ? "right" : "left",
                  px: 3,
                  mt: 1,
                  borderTop: "1px solid #E7E9EC",
                }}
              >
                <ListItemText
                  primary={isArabic ? "English" : "العربية"}
                  primaryTypographyProps={{
                    fontWeight: 700,
                    color: "#1E76BA",
                    textAlign: isArabic ? "right" : "left",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;