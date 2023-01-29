import { styled } from "@stitches/react";

export const TwitterLink = styled(
  (props: { className?: string }) => {
    return (
      <a {...props} href="https://twitter.com/benjamin_such" target="_blank">
        <img
          src="/assets/Twitter_Social_Icon.png"
          title="Twitter Account"
          alt="Twitter"
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
