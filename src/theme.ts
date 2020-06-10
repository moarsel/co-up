import { deepMerge } from "grommet/utils";

import { hpe } from "grommet-theme-hpe";

import { css } from "styled-components";

const nineties = {
  global: {
    colors: {
      background: "#04183F",
      border: "#BEBEBE",
      brand: "#222222",
      control: "#91FA4D",
      focus: "#73FBFD",
      placeholder: "#666",
      "neutral-1": "#1B3ADF",
      "neutral-2": "#B658BA",
      "neutral-3": "#7F2719",

      "neutral-4": "#FFED00",
      "neutral-5": undefined,
      "accent-1": "#EA3EF7",
      "accent-2": "#F7CC5A",
      "accent-3": undefined,
      "status-critical": "#D0011B",
      "status-warning": "#FFED00",
      "status-ok": "#64FF00",
      "status-unknown": "#AAADAE",
      "status-disabled": "#AAADAE",
      "dark-1": "#000001",
      "dark-2": "#333333",
      "dark-3": "#666666",
      "light-1": "#D9D9D9",
      "light-2": "#AAADAE",
    },
    control: {
      background: "#ADADAD",
      border: {
        width: "4px",
        radius: "0",
        color: "border",
      },
    },
    font: {
      family: "'Comic Sans MS', Arial, Helvetica, sans-serif",
      face: undefined,
    },
  },
  anchor: {
    color: "#75FA52",
  },
  button: {
    extend: css`
      ${(props) =>
        !props.plain &&
        `
        font-weight: bold;
        border-radius: 0;
        border-width: 4px;
        border-color: #CBCBCB #4D474E #4D474E #CBCBCB;
        background-color: #ADADAD;
        color: #4F25F4;
        text-decoration: underline;
      `}
    `,
  },
  checkBox: {
    check: {
      radius: "0",
    },
    toggle: {
      radius: "0",
    },
  },
  formField: {},
  radioButton: {
    check: {
      radius: "0",
    },
  },

  select: {
    control: {
      extend: css`
        background-color: #adadad;
        color: #000;
      `,
    },
  },
  textArea: {
    extend: css`
      background-color: #adadad;
      color: #000;
    `,
  },
  textInput: {
    extend: css`
      background-color: #adadad;
      color: #000;
    `,
  },
};

const couptheme = {
  spacing: 24,
  global: {
    colors: {
      default: "#2D9CDB",
      brand: "#9060EB",
      focus: "brand",
    },
  },
  formField: {
    label: {
      size: "medium",
      weight: "bold" as any,
      margin: {
        horizontal: "none",
      },
    },
  },
  button: {
    extend: css`
      font-weight: bold;
      border-radius: 5px;
      border-width: 0;
      background-color: ${(props) => (props.plain ? "transparent" : "brand")};
      color: ${(props) => (!props.plain ? "white" : "black")};
    `,
  },
};

export const theme = deepMerge(hpe, couptheme);
