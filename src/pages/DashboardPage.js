/** @jsxImportSource @emotion/react */
import { React, useState } from "react";
import NavDrawer from "../components/nav_drawer/NavDrawer";
import TopNav from "../components/TopNav";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { css } from "@emotion/react";

export default function DashboardPage() {
  const [selecting, setSelecting] = useState("default");
  const handleSelect = (target) => {
    if (target !== null) setSelecting(target);
  };
  return (
    <div
      css={css`
        background-color: #cceeff;
      `}
    >
      <TopNav navCont={dashboardNav(selecting, handleSelect)} />
      <NavDrawer />
      <ContSwitch type={selecting} />
    </div>
  );
}
function ContSwitch(props) {
  switch (props.type) {
    case "default":
      return <Overview />;
    case "local":
      return <Local />;
    case "wild":
      return <Wild />;
    default:
      return (
        <h1>
          Failed to match between "Overview","Local","Wild". Please report this
          bug.
        </h1>
      );
  }
}
function Overview() {
  return (
    <div
      css={css`
        display: flex;
        min-width: 900px;
        flex-direction: column;
        align-items: left;
        justify-content:
      `}
    >
      <div css={css`
        
      `} className="statbox">
        <h2
          css={css`
            margin: 1rem;
          `}
        >
          Local
        </h2>
      </div>
      <div className="statbox">
        <h2
          css={css`
            margin: 1rem;
          `}
        >
          Wild
        </h2>
      </div>
    </div>
  );
}
function Local() {
  return <div></div>;
}
function Wild() {
  return <div></div>;
}
function dashboardNav(selecting, handleSelect) {
  const ToggleButtonMod = {
    border: "none",
    borderRadius: "0px",
  };

  return (
    <ToggleButtonGroup
      exclusive
      onChange={(_, newSelecting) => handleSelect(newSelecting)}
      value={selecting}
      css={css`
        border: none;
        border-radius: 0px;
        height: 100%;
        align-self:center;
        width:max-content;
      `}
    >
      <ToggleButton value="default" disableRipple style={ToggleButtonMod}>
        Overview
      </ToggleButton>
      <ToggleButton value="local" disableRipple style={ToggleButtonMod}>
        Local
      </ToggleButton>
      <ToggleButton value="wild" disableRipple style={ToggleButtonMod}>
        Wild
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
