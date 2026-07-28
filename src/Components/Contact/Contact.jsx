import { useState } from "react";
import {
  Box, Typography, Container, Grid, TextField, Button, Stack, Alert,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../../data/contactData";
import { useLanguage } from "../../Context/LanguageContext";
import { translations } from "../../data/translations";

const EMAILJS_SERVICE_ID = "service_uqpea8j";
const EMAILJS_TEMPLATE_ID = "template_4h188dn";
const EMAILJS_PUBLIC_KEY = "ksufXta2Oz5qyqYL6";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);
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
    setIsSending(true);
    setStatus(null);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("error");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <Box id="contact" sx={{ backgroundColor: "#FAFAFB", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: "#D6006D", display: "block", mb: 1 }}>
          {t.overline}
        </Typography>
        <Typography
          variant="h4"
          dir={language === "ar" ? "rtl" : "ltr"}
          sx={{
            
            mb: 6,
            maxWidth: 560,
            ml: language === "ar" ? "auto" : 0,
            mr: language === "ar" ? 0 : "auto",
            unicodeBidi: "plaintext",
            textAlign: language === "ar" ? "right" : "left",
          }}
        >
          {t.title}
        </Typography>

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

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
                <TextField
                  name="name"
                  label={t.nameField}
                  fullWidth
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                />
                <TextField
                  name="email"
                  label={t.emailField}
                  type="email"
                  fullWidth
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                />
              </Stack>
              <TextField
                name="subject"
                label={t.subjectField}
                fullWidth
                required
                value={form.subject}
                onChange={handleChange("subject")}
              />
              <TextField
                name="message"
                label={t.messageField}
                fullWidth
                required
                multiline
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
              />

              {status === "success" && (
                <Alert severity="success">
                  {language === "ar" ? "تم إرسال رسالتك بنجاح!" : "Your message has been sent successfully!"}
                </Alert>
              )}
              {status === "error" && (
                <Alert severity="error">
                  {language === "ar" ? "حدث خطأ، حاول مرة أخرى." : "Something went wrong. Please try again."}
                </Alert>
              )}

              <Button
                type="submit"
                variant="contained"
                disabled={isSending}
                sx={{
                  backgroundColor: "#1E76BA",
                  py: 1.5,
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "#00558C" },
                }}
              >
                {isSending ? "..." : t.submit}
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