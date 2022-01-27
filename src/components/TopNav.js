/** @jsxImportSource @emotion/react */
import ComputerIcon from "@mui/icons-material/Computer";
import { css } from "@emotion/react";

export default function TopNav(props) {
      return (
        <div
          css={css`
            background-color: rgb(240, 240, 240);
            height: 3.5em;
            justify-content: space-between;
            display:grid;
            grid-template-columns:minmax(5rem,8rem)  auto minmax(5rem,8rem)

          `}
          className="ali-cont-h"
        >
          <ComputerIcon />
          {props.navCont}
        </div>
      );
}
