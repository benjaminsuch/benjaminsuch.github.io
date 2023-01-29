import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    fontFamily: "Dosis, Tahoma, Arial, Verdana",
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: "rgb(0, 0, 0)",
  },
  "#root": {
    display: "flex",
    justifyContent: "center",
  },
  a: {
    color: "rgb(105, 141, 255)",
    textDecoration: "none",
  },
  "code, pre": {
    fontFamily: "Inconsolata, Tahoma, Arial, Verdana",
  },
  p: {
    fontSize: "1.5rem",
    lineHeight: "2.25rem",
    marginBottom: "1rem",
  },
  "p, span": {
    color: "rgb(133, 138, 143)",
  },
  strong: {
    color: "rgb(179 182 185)",
    fontWeight: 400,
  },
  "h1, h2, h3, h4, h5, h6": {
    color: "#fff",
    marginBottom: ".5rem",
  },
  hr: {
    backgroundColor: "rgba(74, 79, 84, .1)",
    border: "none",
    height: 1,
    margin: "3.5rem 0",
  },
});
