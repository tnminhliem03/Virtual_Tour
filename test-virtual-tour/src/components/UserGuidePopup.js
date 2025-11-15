import React from "react";
import { Box, Dialog, Typography } from "@mui/material";

import handIcon from "../assets/icons/hand_icon.png";
import mouseIcon from "../assets/icons/mouse_icon.png";
import {
  blur4,
  border2,
  borderSecondary,
  flexCenter,
  rounded2xl,
  textCenter,
  textPrimary,
  textUppercase,
  textWhite,
} from "../styles/commonStyles";
import CustomButton from "./CustomButton";
import theme from "../theme";

function UserGuidePopup({ open, onClose }) {
  const defaultPx = theme.custom.paddingX.popup;
  const defaultPy = theme.custom.paddingY.popup;

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason === "backdropClick" || reason === "escapeKeyDown") {
          return;
        }
        onClose();
      }}
      transitionDuration={0}
      slotProps={{
        paper: {
          sx: {
            gap: theme.custom.gap.small,
            ...border2,
            ...borderSecondary,
            ...rounded2xl,
            ...flexCenter,
            ...blur4,
            backgroundColor: "transparent",
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
          },
        },
      }}
    >
      <Typography
        align="center"
        sx={{
          ...textPrimary,
          ...textUppercase,
          fontSize: theme.custom.fontSize.h1,
          fontWeight: theme.custom.fontWeight.h1,
        }}
      >
        Hướng dẫn thao tác
      </Typography>

      <Box sx={{ ...flexCenter, gap: theme.custom.gap.flex }}>
        <Box component="img" src={handIcon} alt="Hand Icon" />

        <Typography
          sx={{ ...textWhite, fontSize: theme.custom.fontSize.subtitle }}
        >
          hoặc
        </Typography>

        <Box component="img" src={mouseIcon} alt="Mouse Icon" />
      </Box>

      <Box sx={{ ...textCenter, maxWidth: theme.custom.widthText }}>
        <Typography
          sx={{
            ...textWhite,
            fontSize: theme.custom.fontSize.body,
            lineHeight: theme.custom.lineHeight.body,
          }}
        >
          Kéo sang trái hoặc phải để trải nghiệm toàn cảnh dự án
        </Typography>
      </Box>

      <CustomButton onClick={onClose} text="Đã hiểu" />
    </Dialog>
  );
}

export default UserGuidePopup;
