import "../../styles/commonStyles.js";
import bgLoading from "../../assets/images/bgLoading.jpg";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import {
  absoluteCenter,
  flexCenter,
  fullScreen,
  wrapper,
  blur6,
} from "../../styles/commonStyles.js";
import { useNavigate } from "react-router-dom";
import SpinnerWithLogo from "../../components/SpinnerWithLogo.js";
import CustomButton from "../../components/CustomButton.js";

function WelcomePage() {
  const navigate = useNavigate();

  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  let variant = "md";
  if (isXs) variant = "xs";
  else if (isSm) variant = "sm";
  else if (isMd) variant = "md";
  else if (isLg) variant = "lg";
  else if (isXl) variant = "xl";

  const goOverviewPage = useCallback(() => {
    navigate("overview");
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(goOverviewPage, 5000);
    return () => clearTimeout(timer);
  }, [goOverviewPage]);

  return (
    <React.Fragment key="welcome-page">
      <Box
        sx={{
          ...wrapper,
          ...flexCenter,
          backgroundImage: `url(${bgLoading})`,
        }}
      >
        <Box
          sx={{
            ...fullScreen,
            ...absoluteCenter,
            ...blur6,
            backgroundImage:
              "radial-gradient(circle, rgba(96, 161, 21, 0.5) 0%, rgba(6, 24, 0, 0.5) 0%)",
          }}
        />

        <Box
          sx={{
            ...flexCenter,
            flexDirection: "column",
            gap: theme.custom.gap.medium,
          }}
        >
          <SpinnerWithLogo thickness={0.3} variant={variant} maxWidth="75%" />

          <CustomButton onClick={goOverviewPage} text="Bắt đầu" />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default WelcomePage;
