import React from "react";
import { Box } from "grommet";
export const AppBar: React.FC = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    border="bottom"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    {...props}
  />
);
