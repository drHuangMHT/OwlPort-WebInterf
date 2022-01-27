/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Button } from "@mui/material";

export default function Navigator() {
  return (
    <div
      css={css`
        background-color: rgb(240, 240, 240);
        margin:1rem;
        min-height:5rem;
        display:grid;
        grid-template-rows: 3rem 3rem 3rem 3rem;
      `}
    >
        <Button>Dashboard</Button>
        <Button>Node</Button>
        <Button>Peers</Button>
        <Button>Settings</Button>
    </div>
  );
}
