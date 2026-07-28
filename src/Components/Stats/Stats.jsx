import { useEffect, useRef, useState } from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import { useLanguage } from "../../Context/LanguageContext";
import { translations } from "../../data/translations";

function useCountUp(target, shouldStart, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, shouldStart, color,language  }) {
  const count = useCountUp(value, shouldStart);

  return (
    <Box sx={{ textAlign: "center", flex: 1 }}>
      
      

      <Typography
        sx={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: { xs: "2.2rem", md: "3rem" },
          color,
        }}
      >
        {language === "en" ? (
            <>
                {suffix}
                {count.toLocaleString()}
            </>
            ) : (
            <>
                {count.toLocaleString()}
                {suffix}
            </>
            )}
      </Typography>
      <Typography sx={{ color: "#5C6570", mt: 1, fontSize: "1rem" }}>
        {label}
      </Typography>
    </Box>
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    { ...t.students, color: "#D6006D" },
    { ...t.successStories, color: "#0072BC" },
    { ...t.experience, color: "#00AEEF" },
  ];

  return (
    <Box ref={sectionRef} sx={{ backgroundColor: "#FAFAFB", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 4, sm: 2 }}
          divider={
            <Box
              sx={{
                width: { xs: "60px", sm: "1px" },
                height: { xs: "1px", sm: "60px" },
                backgroundColor: "#E7E9EC",
                alignSelf: "center",
              }}
            />
          }
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
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Stats;