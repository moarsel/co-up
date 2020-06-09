import { deepMerge } from "grommet/utils";

import { hpe } from "grommet-theme-hpe";

export const theme = deepMerge(hpe, {
  spacing: 24,
  global: {
    colors: {
      default: "#2D9CDB",
      brand: "#2D9CDB",
      focus: "brand",
    },
    font: {
      family: "Roboto",
      size: "16px",
      height: "20px",
    },
  },
});
