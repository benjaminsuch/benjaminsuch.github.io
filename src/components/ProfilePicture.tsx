import { styled } from "@stitches/react";

export const ProfilePicture = styled("div", {
  width: "10rem",
  height: "10rem",
  backgroundImage: "url(assets/me.jpg)",
  borderRadius: "50%",
  backgroundSize: "35rem",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "15% 25%",
  marginBottom: "1rem",
  transition: "transform .25s ease",

  "&:hover": {
    transform: "scale(1.1)",
  },
});
