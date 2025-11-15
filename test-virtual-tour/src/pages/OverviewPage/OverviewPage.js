import React, { useState } from "react";
import {
  absoluteCenter,
  bgPrimary85,
  flexCenter,
  roundedB2xl,
} from "../../styles/commonStyles";
import { Box, Button, useMediaQuery } from "@mui/material";

import UserGuidePopup from "../../components/UserGuidePopup";
import DesktopBottomNav from "../../components/DesktopBottomNav";
import SvgDrop from "../../components/SvgDrop";
import theme from "../../theme";
import MobileBottomNav from "../../components/MobileBottomNav";
import VirtualDrag from "../../components/VirtualDrag";

function OverviewPage() {
  const [openDrawerBottomNav, setOpenDrawerBottomNav] = useState(true);
  const [openUserGuide, setOpenUserGuide] = useState(true);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawerBottomNav = () => {
    setOpenDrawerBottomNav((prev) => !prev);
  };

  const handleOpenUserGuide = () => setOpenUserGuide(true);

  const handleCloseUserGuide = () => setOpenUserGuide(false);

  return (
    <React.Fragment key="overview-page">
      <Box sx={{ ...flexCenter }}>
        <VirtualDrag />
        <UserGuidePopup open={openUserGuide} onClose={handleCloseUserGuide} />

        <Box sx={{ ...absoluteCenter, bottom: 0 }}>
          {isMobile ? (
            <MobileBottomNav
              open={openDrawerBottomNav}
              onHelp={handleOpenUserGuide}
            />
          ) : (
            <DesktopBottomNav
              open={openDrawerBottomNav}
              onLogoClick={handleOpenUserGuide}
            />
          )}
          ;
          <Button
            variant="contained"
            onClick={toggleDrawerBottomNav}
            sx={{ ...roundedB2xl, ...bgPrimary85, px: 13 }}
          >
            <SvgDrop open={openDrawerBottomNav} />
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default OverviewPage;
