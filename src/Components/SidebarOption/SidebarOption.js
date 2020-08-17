import React from "react";
import "./SidebarOption.css";
import Hidden from "@material-ui/core/Hidden";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <Hidden smDown><h2>{text}</h2></Hidden>
    </div>
  );
}

export default SidebarOption;