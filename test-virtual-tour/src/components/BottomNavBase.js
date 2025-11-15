import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  bgWhite85,
  colorPrimary,
  colorWhite,
  dropShadowSize,
  hoverBlock50,
  rounded2xl,
  textUppercase,
  textWhite,
} from "../styles/commonStyles";
import theme from "../theme";

function BottomNavBase({
  open,
  actions,
  onChangeValue,
  value,
  direction,
  showLabels,
}) {
  return (
    <BottomNavigation
      showLabels={showLabels}
      value={value}
      onChange={(event, newValue) => {
        if (newValue === 0) return;
        onChangeValue(newValue);
      }}
      sx={{
        ...rounded2xl,
        width: "100%",
        maxWidth: "90%",
        height: "auto",
        backgroundColor: colorPrimary,
        position: "fixed",
        left: "50%",
        bottom: 0,
        transform: open ? "translate(-50%, -35%)" : "translate(-50%, 100%)",
        transition: `transform ease 0.3s`,
        py: 1.5,

        "& .Mui-selected": {
          filter: dropShadowSize,
          backgroundColor: bgWhite85,

          "& svg path": {
            stroke: colorPrimary,
          },
        },
      }}
    >
      {actions.map((item) => (
        <BottomNavigationAction
          key={item.id}
          className={item.className || ""}
          label={item.label}
          icon={item.icon}
          onClick={item.onClick}
          sx={{
            ...textUppercase,
            ...textWhite,
            ...rounded2xl,
            gap: 1,
            flexDirection: direction || "column",
            ...(item.style || {}),

            "& .MuiBottomNavigationAction-label": {
              fontSize: theme.custom.fontSize.bottomNav,
              fontWeight: theme.custom.fontWeight.bottomNav,
            },

            "& svg path": {
              stroke: colorWhite,
            },

            "&:not(.Mui-selected):not(.no-hover):hover": {
              ...hoverBlock50,
            },
          }}
        />
      ))}
    </BottomNavigation>
  );
}

export default BottomNavBase;
