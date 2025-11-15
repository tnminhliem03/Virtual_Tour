import { useState } from "react";
import logo from "../assets/logos/logo.png";
import { fullScreen } from "../styles/commonStyles";
import svgIcons from "../data/svgIcons";
import BottomNavBase from "./BottomNavBase";

function DesktopBottomNav({ open, onLogoClick }) {
  const [value, setValue] = useState(1);

  const actions = [
    {
      id: "logo",
      label: "",
      className: "no-hover",
      icon: (
        <img
          src={logo}
          alt="logo"
          style={{ ...fullScreen, objectFit: "contain" }}
        />
      ),
      onClick: onLogoClick,
      style: {
        flex: "0 0 200px",
      },
    },
    ...svgIcons.map((icon) => ({
      id: icon.id,
      label: icon.label,
      icon: icon.svg,
    })),
  ];

  return (
    <BottomNavBase
      open={open}
      value={value}
      onChangeValue={setValue}
      actions={actions}
      direction="row"
      showLabels={true}
    />
  );
}

export default DesktopBottomNav;
