import { Button } from "@mui/material";
import React from "react";
import {
  border3,
  borderSecondary,
  hoverButtonColor,
  rounded2xl,
} from "../styles/commonStyles";
import theme from "../theme";

const CustomButton = ({ onClick, text }) => {
  const defaultPx = theme.custom.paddingX.button;
  const defaultPy = theme.custom.paddingY.button;

  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        ...border3,
        ...borderSecondary,
        ...rounded2xl,
        ...hoverButtonColor,
        paddingInline: {
          xs: theme.spacing(defaultPx.xs),
          sm: theme.spacing(defaultPx.sm),
          md: theme.spacing(defaultPx.md),
          lg: theme.spacing(defaultPx.lg),
        },
        paddingBlock: {
          xs: theme.spacing(defaultPy.xs),
          sm: theme.spacing(defaultPy.sm),
          md: theme.spacing(defaultPy.md),
          lg: theme.spacing(defaultPy.lg),
        },
        fontSize: theme.custom.fontSize.button,
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
