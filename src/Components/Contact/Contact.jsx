import { useState } from "react";
import {
  Box, Typography, Container, Grid, TextField, Button, Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { contactInfo } from "../../data/contactData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const { language } = useLanguage();
  const t = translations[language].contact;

  const infoItems = [
    { icon: PhoneIcon, label: t.callLabel, value: contactInfo.phone },
    { icon: EmailIcon, label: t.emailLabel, value: contactInfo.email },
    { icon: LocationOnIcon, label: t.addressLabel, value: contactInfo.address },
  ];

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Box id="contact" sx={{ backgroundColor: "#FAFAFB", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: "#D6006D", display: "block", mb: 1 }}>
          {t.overline}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, color: "#101828", mb: 6 }}
        >
          {t.title}
        </Typography>

        {/* Info cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {infoItems.map((item) => {
            const Icon = item.icon;
            return (
              <Grid size={{ xs: 12, sm: 4 }} key={item.label}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "10px",
                      backgroundColor: "#1E76BA",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ color: "#FFFFFF", fontSize: 22 }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#5C6570" }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ fontWeight: 600, color: "#101828" }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            );
          })}
        </Grid>

        {/* Form + Map */}
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
                <TextField
                  label={t.nameField}
                  fullWidth
                  value={form.name}
                  onChange={handleChange("name")}
                />
                <TextField
                  label={t.emailField}
                  fullWidth
                  value={form.email}
                  onChange={handleChange("email")}
                />
              </Stack>
              <TextField
                label={t.subjectField}
                fullWidth
                value={form.subject}
                onChange={handleChange("subject")}
              />
              <TextField
                label={t.messageField}
                fullWidth
                multiline
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#1E76BA",
                  py: 1.5,
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "#00558C" },
                }}
              >
                {t.submit}
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="iframe"
              title="SDK Location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                contactInfo.mapQuery
              )}&output=embed`}
              sx={{
                width: "100%",
                height: "100%",
                minHeight: 320,
                border: 0,
                borderRadius: "12px",
              }}
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;