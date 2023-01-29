import { styled } from "@stitches/react";

export const GithubLink = styled(
  (props: { className?: string }) => {
    return (
      <a {...props} href="https://github.com/benjaminsuch" target="_blank">
        <img
          src="/assets/GitHub-Mark-32px.png"
          title="Github Account"
          alt="Github"
          height="32"
          width="32"
        />
      </a>
    );
  },
  {
    transition: "transform .25s ease",
  }
);
