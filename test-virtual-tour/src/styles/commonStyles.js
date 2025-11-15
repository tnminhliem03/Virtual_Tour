export const colorPrimary = "#5fcd6f";
export const colorSecondary = "#5fcd6fd9";
export const borderColorSecondary = "#017111";
export const colorWhite = "#fff";
export const radius2xl = "0.875rem";
export const dropShadowSize = `drop-shadow(0 2px 2px color-mix(in oklab, ${colorWhite} 85%, transparent))`;
export const easeOut = "cubic-bezier(0.4, 0, 0.2, 1);";
export const blurXs = "4px";
export const blurSm = "6px";
export const defaultTransitionDuration = "0.15s";
export const duration = "0.3s";

export const wrapper = {
  width: "100vw",
  height: "100vh",
  position: "relative",
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const relativeCenter = {
  ...flexCenter,
  position: "relative",
};

export const absoluteCenter = {
  ...flexCenter,
  position: "absolute",
};

export const fullScreen = {
  height: "100%",
  width: "100%",
};

export const borderWhite = {
  borderColor: colorWhite,
};

export const borderSecondary = {
  borderColor: borderColorSecondary,
};

export const border2 = {
  borderWidth: "2px",
  borderStyle: "solid",
};

export const border3 = {
  borderWidth: "3px",
  borderStyle: "solid",
};

export const rounded2xl = {
  borderRadius: radius2xl,
};

export const roundedB2xl = {
  borderBottomRightRadius: radius2xl,
  borderBottomLeftRadius: radius2xl,
};

export const blur4 = {
  backdropFilter: `blur(${blurXs})`,
};

export const blur6 = {
  backdropFilter: `blur(${blurSm})`,
};

export const textWhite = {
  color: colorWhite,
};

export const textUppercase = {
  textTransform: "uppercase",
};

export const textCenter = {
  textAlign: "center",
};

export const textPrimary = {
  color: colorPrimary,
};

export const bgWhite = {
  backgroundColor: colorWhite,
};

export const bgWhite85 = {
  backgroundColor: "#ffffffd9",
};

export const bgPrimary85 = {
  backgroundColor: colorSecondary,
};

export const hoverBlock = {
  "&:hover": {
    filter: dropShadowSize,
    transition: `all ${easeOut} ${duration}`,
  },
};

export const hoverBlock50 = {
  "&:hover": {
    ...textPrimary,
    backgroundColor: `color-mix(in oklab, ${colorWhite} 50%, transparent)`,
    transition: `all ${easeOut}`,

    "& svg path": {
      stroke: colorPrimary,
    },
  },
};

export const hoverButtonColor = {
  "&:hover": {
    ...hoverBlock,
    ...textPrimary,
    ...bgWhite,
    ...borderWhite,
  },
};
