import { createTheme } from "@mui/material";
import { colorPrimary, colorWhite } from "./styles/commonStyles";

const theme = createTheme({
  spacing: "0.25rem",
  custom: {
    circularProgressSize: { xs: 285, sm: 585, md: 305, lg: 505 },
    gap: {
      small: { xs: 5, sm: 13, md: 7 },
      flex: { xs: 3, sm: 4, md: 4, lg: 6 },
      medium: { xs: 20, sm: 30, md: 9, lg: 20 },
    },

    fontSize: {
      button: {
        xs: "1rem",
        sm: "1.5rem",
        md: "0.75rem",
        lg: "1.125rem",
      },

      h1: {
        xs: "1.1rem",
        sm: "2.8rem",
        md: "1.55rem",
        lg: "3.25rem",
      },

      subtitle: {
        sm: "1.5rem",
        md: "0.75rem",
        lg: "1.5rem",
      },

      body: {
        xs: "0.875rem",
        sm: "2rem",
        md: "1rem",
        lg: "1.75rem",
      },

      bottomNav: {
        xs: "0.875rem",
        sm: "1.25rem",
        md: "0.65rem",
        lg: "0.875rem"
      }
    },

    fontWeight: {
      h1: {
        xs: 700,
        md: 700,
        lg: 800,
      },

      bottomNav: {
        xs: 600,
        md: 600,
      }
    },

    lineHeight: {
      body: {
        xs: 1.9,
        md: 1.4,
        lg: 1.6,
      },
    },

    paddingX: {
      button: {
        xs: 10,
        sm: 20,
        md: 16,
        lg: 30,
      },

      popup: {
        xs: 10,
        sm: 15,
        md: 20,
        lg: 25,
      },
    },

    paddingY: {
      button: {
        xs: 5,
        sm: 10,
        md: 4.2,
        lg: 7,
      },

      popup: {
        xs: 10,
        sm: 15,
        md: 8.75,
        lg: 10,
      },
    },

    widthText: {
      xs: 190,
      sm: 440,
      md: 300,
      lg: 500,
    },
  },

  palette: {
    primary: {
      main: colorPrimary,
      contrastText: colorWhite,
    },
  },
});

export default theme;
