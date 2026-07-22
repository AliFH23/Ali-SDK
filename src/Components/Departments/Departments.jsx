import { useState } from "react";
import {
  Box, Typography, Container, Tabs, Tab, Accordion,
  AccordionSummary, AccordionDetails, Chip, Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { departmentsData } from "../../data/departmentsData";
import { useLanguage } from "../../Context/LanguageContext";
import { translations } from "../../data/translations";

function Departments() {
  const [activeTab, setActiveTab] = useState(0);
  const activeDept = departmentsData[activeTab];
  const { language } = useLanguage();
  const t = translations[language].departments;

  return (
    <Box id="departments" sx={{ backgroundColor: "#FFFFFF", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: "#D6006D", display: "block", mb: 1 }}>
          {t.overline}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, color: "#101828", mb: 1 }}
        >
          {t.title}
        </Typography>
        <Typography sx={{ color: "#5C6570", mb: 5, maxWidth: 560 }}>
          {t.subtitle}
        </Typography>

        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          sx={{
            mb: 5,
            borderBottom: "1px solid #E7E9EC",
            "& .MuiTabs-indicator": {
              backgroundColor: activeDept.color,
              height: 3,
            },
          }}
        >
          {departmentsData.map((dept, index) => (
            <Tab
              key={dept.id}
              label={t.names[dept.id]}
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                color: activeTab === index ? activeDept.color : "#5C6570",
                "&.Mui-selected": { color: activeDept.color },
              }}
            />
          ))}
        </Tabs>

        <Stack spacing={2}>
          {activeDept.modules.map((module, index) => (
            <Accordion
              key={module.code}
              defaultExpanded={index === 0}
              elevation={0}
              disableGutters
              sx={{
                border: "1px solid #E7E9EC",
                borderRadius: "12px !important",
                "&:before": { display: "none" },
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: activeDept.color }} />}
                sx={{ px: 3, py: 1 }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography
                    sx={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      color: activeDept.color,
                      fontSize: "0.8rem",
                      backgroundColor: `${activeDept.color}15`,
                      px: 1.2,
                      py: 0.4,
                      borderRadius: "6px",
                    }}
                  >
                    {module.code}
                  </Typography>
                  <Typography sx={{ fontWeight: 600, color: "#101828" }}>
                    {module.title}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {module.courses.map((course) => (
                    <Chip
                      key={course}
                      label={course}
                      sx={{
                        backgroundColor: "#F3F4F6",
                        color: "#101828",
                        fontFamily: '"Inter", sans-serif',
                      }}
                    />
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Departments;