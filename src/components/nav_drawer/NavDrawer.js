/** @jsxImportSource @emotion/react */
import { Button } from "@mui/material";
import { React, useState } from "react";
import { Drawer } from "@mui/material";
import { css } from "@emotion/react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import UserDiv from "./UserDiv";
import Navigator from "./Navigator";

export default function NavDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <div
      css={css`
        position: fixed;
        top: 50%;
        bottom: 50%;
      `}
    >
      <Button
        css={css`
          height: 4rem;
          width: 2rem;
          padding: 0px;
          min-width: 0px;
          background-color: rgb(230, 230, 230);
        `}
        onClick={() => toggleDrawer(true)}
      >
        <ChevronRightIcon />
      </Button>
      <Drawer
        anchor={"left"}
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <div
          css={css`
            min-width: 15rem;
            max-width: 25rem;
          `}
        >
          <UserDiv />
          <Navigator />
        </div>
      </Drawer>
    </div>
  );
}
