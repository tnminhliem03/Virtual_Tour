import { useState } from "react";
import svgIcons from "../data/svgIcons";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { textWhite } from "../styles/commonStyles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BottomNavBase from "./BottomNavBase";
import { Button, Drawer } from "@mui/material";

function MobileBottomNav({ open, onHelp }) {
  const [value, setValue] = useState(1);
  const [openMore, setOpenMore] = useState(false);

  const mainActions = svgIcons.slice(0, 1);
  const moreActions = svgIcons.slice(1);

  const actions = [
    {
      id: "action-1",
      label: "Hướng dẫn",
      icon: <QuestionMarkIcon sx={{ ...textWhite }} />,
      onClick: onHelp,
      className: "no-hover",
    },

    ...mainActions.map((item) => ({
      id: item.id,
      label: item.label,
      icon: item.svg,
    })),

    {
      id: "action-more",
      label: "Xem thêm",
      icon: <MoreVertIcon sx={{ ...textWhite }} />,
      onClick: () => setOpenMore(true),
    },
  ];

  return (
    <>
      <BottomNavBase
        open={open}
        value={value}
        onChangeValue={setValue}
        actions={actions}
      />

      <Drawer
        anchor="bottom"
        open={openMore}
        onClose={() => setOpenMore(false)}
        slotProps={{
          paper: { sx: { backgroundColor: "green" } },
        }}
      >
        {moreActions.map((item) => (
          <Button key={item.id} sx={{ ...textWhite }}>
            {item.label}
          </Button>
        ))}
      </Drawer>
    </>
  );
}

export default MobileBottomNav;
