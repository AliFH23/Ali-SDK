import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Stack,
  Alert,
  Paper,
  CircularProgress,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";

import emailjs from "@emailjs/browser";

import { contactInfo } from "../../data/contactData";
import { useLanguage } from "../../Context/LanguageContext";
import { translations } from "../../data/translations";

const EMAILJS_SERVICE_ID = "service_uqpea8j";
const EMAILJS_TEMPLATE_ID = "template_4h188dn";
const EMAILJS_PUBLIC_KEY = "ksufXta2Oz5qyqYL6";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const { language } = useLanguage();
  const t = translations[language].contact;

  const isArabic = language === "ar";

  const infoItems = [
    {
      icon: PhoneIcon,
      label: t.callLabel,
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: "#D6006D",
      valueDirection: "ltr",
    },
    {
      icon: EmailIcon,
      label: t.emailLabel,
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: "#0072BC",
      valueDirection: "ltr",
    },
    {
      icon: LocationOnIcon,
      label: t.addressLabel,
      value: contactInfo.address,
      color: "#00AEEF",
      valueDirection: isArabic ? "rtl" : "ltr",
    },
  ];

  const handleChange = (field) => (event) => {
    setForm((previousForm) => ({
      ...previousForm,
      [field]: event.target.value,
    }));

    if (status) {
      setStatus(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus(null);

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS!", response.status, response.text);

      setStatus("success");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "#FFFFFF",
      transition:
        "box-shadow 0.2s ease, border-color 0.2s ease",

      "& fieldset": {
        borderColor: "#DDE1E6",
      },

      "&:hover fieldset": {
        borderColor: "#1E76BA",
      },

      "&.Mui-focused": {
        boxShadow: "0 0 0 4px rgba(30,118,186,0.10)",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#1E76BA",
      },
    },

    "& .MuiInputLabel-root": {
      textAlign: isArabic ? "right" : "left",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#1E76BA",
    },

    "& input, & textarea": {
      textAlign: isArabic ? "right" : "left",
    },
  };

  return (
    <Box
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        backgroundColor: "#F8FAFC",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <Box
          sx={{
            mb: { xs: 5, md: 7 },
            textAlign: isArabic ? "right" : "left",
          }}
        >
          <Typography
            variant="overline"
            dir="ltr"
            sx={{
              color: "#D6006D",
              display: "block",
              width: "100%",
              mb: 1,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textAlign: "left",
              unicodeBidi: "isolate",
            }}
          >
            {t.overline}
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontWeight: 700,
              color: "#101828",
            }}
          >
            {t.title}
          </Typography>

          <Typography
            sx={{
              color: "#5C6570",
              lineHeight: 1.8,
              mt: 1.5,
              maxWidth: 600,
              ml: isArabic ? "auto" : 0,
              mr: isArabic ? 0 : "auto",
            }}
          >
            {isArabic
              ? "يسعدنا تواصلك معنا. أرسل رسالتك وسيقوم فريقنا بالرد عليك في أقرب وقت."
              : "We would love to hear from you. Send us a message and our team will get back to you as soon as possible."}
          </Typography>
        </Box>

        {/* Contact information cards */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: { xs: 5, md: 7 },
          }}
        >
          {infoItems.map((item) => {
            const Icon = item.icon;

            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={item.label}
              >
                <Paper
                  component={item.href ? "a" : "div"}
                  href={item.href}
                  elevation={0}
                  sx={{
                    height: "100%",
                    minHeight: 130,
                    p: 3,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    textDecoration: "none",
                    color: "inherit",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E7E9EC",
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "hidden",
                    transition:
                      "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",

                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow:
                        "0 16px 35px rgba(16,24,40,0.08)",
                      borderColor: `${item.color}55`,
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
                      backgroundColor: item.color,
                    }}
                  />

                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      backgroundColor: `${item.color}14`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon
                      sx={{
                        color: item.color,
                        fontSize: 25,
                      }}
                    />
                  </Box>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#5C6570",
                        mb: 0.5,
                        textAlign: isArabic ? "right" : "left",
                      }}
                    >
                      {item.label}
                    </Typography>

                    <Typography
                      component="div"
                      dir={item.valueDirection}
                      sx={{
                        fontWeight: 600,
                        color: "#101828",
                        lineHeight: 1.7,
                        overflowWrap: "anywhere",
                        unicodeBidi: "isolate",
                        textAlign:
                          item.valueDirection === "ltr"
                            ? isArabic
                              ? "right"
                              : "left"
                            : isArabic
                            ? "right"
                            : "left",
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Form and map */}
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
        >
          {/* Contact form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                p: { xs: 2.5, sm: 3, md: 3 },
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #FCFDFE 100%)",
                border: "1px solid #E3E7EC",
                borderRadius: "20px",
                boxShadow:
                  "0 20px 45px rgba(16,24,40,0.08)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top gradient line */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "5px",
                  background:
                    "linear-gradient(90deg, #D6006D 0%, #1E76BA 100%)",
                }}
              />

              {/* Form icon */}
              <Box
                sx={{
                  width: 62,
                  height: 62,
                  borderRadius: "50%",
                  backgroundColor: "rgba(30,118,186,0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2.5,
                  mt: 1,
                  ml: isArabic ? "auto" : 0,
                  mr: isArabic ? 0 : "auto",
                }}
              >
                <SendIcon
                  sx={{
                    color: "#1E76BA",
                    fontSize: 30,
                    transform: isArabic
                      ? "scaleX(-1)"
                      : "none",
                  }}
                />
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontSize: {
                    xs: "1.4rem",
                    md: "1.7rem",
                  },
                  fontWeight: 700,
                  color: "#101828",
                  mb: 0.75,
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {isArabic
                  ? "أرسل لنا رسالة"
                  : "Send us a message"}
              </Typography>

              <Typography
                sx={{
                  color: "#5C6570",
                  mb: 2.5,
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {isArabic
                  ? "أدخل بياناتك ورسالتك وسنتواصل معك قريبًا."
                  : "Enter your details and message, and we will contact you soon."}
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                >
                  <TextField
                    name="name"
                    label={t.nameField}
                    fullWidth
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange("name")}
                    sx={textFieldStyles}
                  />

                  <TextField
                    name="email"
                    label={t.emailField}
                    type="email"
                    fullWidth
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    sx={textFieldStyles}
                  />
                </Stack>

                <TextField
                  name="subject"
                  label={t.subjectField}
                  fullWidth
                  required
                  value={form.subject}
                  onChange={handleChange("subject")}
                  sx={textFieldStyles}
                />

                <TextField
                  name="message"
                  label={t.messageField}
                  fullWidth
                  required
                  multiline
                  rows={4}
                  value={form.message}
                  onChange={handleChange("message")}
                  sx={textFieldStyles}
                />

                {status === "success" && (
                  <Alert
                    severity="success"
                    sx={{
                      borderRadius: "12px",
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {isArabic
                      ? "تم إرسال رسالتك بنجاح!"
                      : "Your message has been sent successfully!"}
                  </Alert>
                )}

                {status === "error" && (
                  <Alert
                    severity="error"
                    sx={{
                      borderRadius: "12px",
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {isArabic
                      ? "حدث خطأ، حاول مرة أخرى."
                      : "Something went wrong. Please try again."}
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSending}
                  endIcon={
                    isSending ? (
                      <CircularProgress
                        size={19}
                        sx={{
                          color: "#FFFFFF",
                        }}
                      />
                    ) : (
                      <SendIcon
                        sx={{
                          transform: isArabic
                            ? "scaleX(-1)"
                            : "none",
                        }}
                      />
                    )
                  }
                  sx={{
                    mt: 0.5,
                    backgroundColor: "#1E76BA",
                    py: 1.65,
                    minHeight: 54,
                    borderRadius: "14px",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow:
                      "0 10px 22px rgba(30,118,186,0.24)",
                    transition:
                      "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",

                    "&:hover": {
                      backgroundColor: "#00558C",
                      transform: "translateY(-2px)",
                      boxShadow:
                        "0 14px 28px rgba(30,118,186,0.30)",
                    },

                    "&.Mui-disabled": {
                      backgroundColor: "#8DB9DA",
                      color: "#FFFFFF",
                    },

                    "& .MuiButton-endIcon": {
                      marginLeft: isArabic ? 0 : "8px",
                      marginRight: isArabic ? "8px" : 0,
                    },
                  }}
                >
                  {isSending
                    ? isArabic
                      ? "جارٍ الإرسال"
                      : "Sending"
                    : t.submit}
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Map */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: {
                  xs: 420,
                  md: 560,
                },
                p: 1,
                backgroundColor: "#FFFFFF",
                border: "1px solid #E7E9EC",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow:
                  "0 20px 45px rgba(16,24,40,0.08)",
              }}
            >
              <Box
                component="iframe"
                title="SDK Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  contactInfo.mapQuery
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sx={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  border: 0,
                  borderRadius: "14px",
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;