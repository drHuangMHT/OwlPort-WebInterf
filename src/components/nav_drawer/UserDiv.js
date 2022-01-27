/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export default function UserDiv() {
  return (
    <div
      css={css`
        background-color: rgb(240, 240, 240);
        margin:1rem;
        min-height:5rem;
      `}
    ></div>
  );
}
