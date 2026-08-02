import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  Paper,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import { useLanguage } from "../../Context/LanguageContext";
import { translations } from "../../data/translations";

function useCountUp(target, shouldStart, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [shouldStart, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  shouldStart,
  color,
  language,
  icon: Icon,
}) {
  const count = useCountUp(value, shouldStart);
  const isArabic = language === "ar";

  return (
    <Paper
      elevation={0}
      sx={{
        flex: 1,
        width: "100%",
        minHeight: 230,
        p: { xs: 3, md: 4 },
        border: "1px solid #E7E9EC",
        borderRadius: "18px",
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 18px 40px rgba(16,24,40,0.10)",
        },
      }}
    >
      <Box
        sx={{
          width: 58,
          height: 58,
          borderRadius: "50%",
          backgroundColor: `${color}14`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Icon
          sx={{
            color,
            fontSize: 30,
          }}
        />
      </Box>

      <Typography
        dir="ltr"
        sx={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: { xs: "2.2rem", md: "3rem" },
          color,
          lineHeight: 1.2,
        }}
      >
        {isArabic ? (
          <>
            {count.toLocaleString()}
            {suffix}
          </>
        ) : (
          <>
            {suffix}
            {count.toLocaleString()}
          </>
        )}
      </Typography>

      <Typography
        sx={{
          color: "#5C6570",
          mt: 1.5,
          fontSize: "1rem",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {label}
      </Typography>
    </Paper>
  );
}

function Stats() {
  const { language } = useLanguage();
  const t = translations[language].stats;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const items = [
    {
      ...t.students,
      color: "#D6006D",
      icon: SchoolIcon,
    },
    {
      ...t.successStories,
      color: "#0072BC",
      icon: EmojiEventsIcon,
    },
    {
      ...t.experience,
      color: "#00AEEF",
      icon: WorkspacePremiumIcon,
    },
  ];

  return (
    <Box
      ref={sectionRef}
      dir={language === "ar" ? "rtl" : "ltr"}
      sx={{
        backgroundColor: "#F8FAFC",
        py: { xs: 7, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
        >
          {items.map((item, index) => (
            <StatItem
              key={index}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              color={item.color}
              shouldStart={isVisible}
              language={language}
              icon={item.icon}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Stats;