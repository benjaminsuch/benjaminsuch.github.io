import { styled } from "@stitches/react";

import { GithubLink } from "./GithubLink";
import { LinkedInLink } from "./LinkedInLink";
import { TwitterLink } from "./TwitterLink";
import { ProfilePicture } from "./ProfilePicture";

export const ProfileCard = styled(
  (props: { className?: string }) => {
    return (
      <div {...props}>
        <ProfilePicture />
        <h1 style={{ marginBottom: 0 }}>Benjamin Such</h1>
        <small>
          <span>
            <code>Munich, Germany</code>
          </span>
        </small>
        <br />
        <code>Full Stack Software Engineer</code>
        <Links>
          <GithubLink />
          <TwitterLink />
          <LinkedInLink />
        </Links>
        <Tags />
      </div>
    );
  },
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    h1: {
      color: "#000",
    },

    span: {
      color: "rgba(0, 0, 0, 0.5)",
    },
  }
);

const Links = styled("div", {
  display: "flex",
  margin: "2rem 0",

  ">a + a": {
    marginLeft: ".5rem",
  },

  ">a:hover": {
    transform: "scale(1.1)",
  },
});

const Tags = styled(
  (props: { className?: string }) => {
    return (
      <div {...props}>
        <span>
          React, React Native, TypeScript, NoSQL, PostgreSQL, Electron, Desktop
          Apps, Mobile Apps, UI/UX, Tooling, Next.js, 3D, Three.js, Google
          Cloud, Heroku
        </span>
      </div>
    );
  },
  {
    padding: "0 2rem",
    textAlign: "center",
    maxWidth: "75%",
  }
);
