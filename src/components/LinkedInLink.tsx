import { styled } from "@stitches/react";

export const LinkedInLink = styled(
  (props: { className?: string }) => {
    return (
      <a
        {...props}
        href="https://www.linkedin.com/in/benjamin-such-5308121a6/"
        target="_blank"
      >
        <img
          src="/assets/LinkedIn_Icon.png"
          title="LinkedIn Account"
          alt="LinkedIn"
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
