import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { absoluteCenter, relativeCenter } from "../styles/commonStyles";

import bgLogo from "../assets/logos/logo1.png";
import theme from "../theme";

const SpinnerWithLogo = ({
  variant,
  thickness,
  maxWidth,
  src = bgLogo,
  alt = "Logo",
}) => {
  const sizes = theme.custom.circularProgressSize;

  const getSize = (() => {
    switch (variant) {
      case "xs":
        return sizes.xs;
      case "sm":
        return sizes.sm;
      case "md":
        return sizes.md;
      case "lg":
        return sizes.lg;
      case "xl":
        return sizes.xl;
      default:
        return sizes.md;
    }
  })();
  
  return (
    <Box sx={{ ...relativeCenter }}>
      <CircularProgress
        enableTrackSlot
        size={getSize}
        thickness={thickness}
        sx={{
          ".MuiCircularProgress-circle": {
            animation: "circular-rotate 8s linear infinite !important",
          },
        }}
      />

      <Box
        component="img"
        src={src}
        alt={alt}
        maxWidth={maxWidth}
        sx={{ ...absoluteCenter }}
      />
    </Box>
  );
};

export default SpinnerWithLogo;
