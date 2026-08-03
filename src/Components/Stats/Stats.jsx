import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
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
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
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
  icon: Icon,
}) {
  const count = useCountUp(value, shouldStart);

  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        minHeight: 240,
        p: { xs: 3, md: 4 },
        boxSizing: "border-box",
        border: "1px solid #E7E9EC",
        borderRadius: "20px",
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition:
          "transform 0.25s ease, box-shadow 0.25s ease",

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
          direction: "ltr",
          unicodeBidi: "isolate",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: { xs: "2.2rem", md: "3rem" },
          color,
          lineHeight: 1.2,
          whiteSpace: "nowrap",
        }}
      >
        {suffix}
        {count.toLocaleString("en-US")}
        
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
    const section = sectionRef.current;

    if (!section) return;

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

    observer.observe(section);

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
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },

            columnGap: {
              xs: 3,
              md: 6,
            },

            rowGap: {
              xs: 3,
              md: 4,
            },

            alignItems: "stretch",
          }}
        >
          {items.map((item, index) => (
            <StatItem
              key={`${item.label}-${index}`}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              color={item.color}
              shouldStart={isVisible}
              icon={item.icon}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Stats;