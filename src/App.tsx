import { globalCss, styled } from "@stitches/react";
import { PropsWithChildren } from "react";
import { ProfilePicture } from "./components/ProfilePicture";

const globalStyles = globalCss({
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

globalStyles();

const App = styled(
  (props: { className?: string }) => {
    return (
      <div {...props}>
        <Section>
          <Sidebar>
            <ProfileCard />
          </Sidebar>
          <Content>
            <About />
          </Content>
        </Section>
      </div>
    );
  },
  {
    display: "flex",
    flexDirection: "column",
    padding: "5rem 0",
    width: "100%",
  }
);

export default App;

const Sidebar = styled("div", {
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  minWidth: "22.5rem",
  padding: "5rem 0",
  width: "30%",
});

const ProfileCard = styled(
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
        <div style={{ padding: "0 2rem", textAlign: "center" }}>
          <span>
            React, React Native, TypeScript, NoSQL, PostgreSQL, Electron,
            Desktop Apps, Mobile Apps, UI/UX, Tooling, Next.js, 3D, Three.js,
            Google Cloud, Heroku
          </span>
        </div>
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
  }
);

const Content = styled("div", {
  backgroundColor: "rgb(10, 10, 10)",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  padding: "5rem",
});

const Post = styled(
  ({
    children,
    headline,
    ...props
  }: PropsWithChildren<{ className?: string; headline: string }>) => {
    return (
      <div {...props}>
        <h1>{headline}</h1>
        {children}
      </div>
    );
  },
  {}
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

const GithubLink = styled(
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

const TwitterLink = styled(
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

const LinkedInLink = styled(
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

const About = styled(
  (props: { className?: string }) => {
    return (
      <div {...props}>
        <h1>About</h1>
        <p>
          My name is Benjamin Such, a freelance full stack software engineer
          from Munich, Germany.
        </p>
        <p>
          With <strong>TypeScript</strong> as my weapon, I work in all
          environments of software engineering: Building beautiful user
          interfaces with a focus on <strong>UX</strong>, improving project
          tools to speed up development, maintaing <strong>NoSQL</strong> and{" "}
          <strong>PostgreSQL</strong> databases, working in large scale{" "}
          <strong>NodeJS</strong> backends, building{" "}
          <strong>desktop apps</strong> via{" "}
          <strong>
            <a href="https://www.electronjs.org/">Electron</a>
          </strong>{" "}
          and <strong>mobile apps</strong> via{" "}
          <strong>
            <a href="https://reactnative.dev/">React Native</a>
          </strong>
        </p>
        <p>
          Every once in a while I dive deep into interesting topics and publish
          the result here on my website. Right now, my focus is mostly on game
          development and it's complexities, so you will most likely read more
          about these topics here.
        </p>
      </div>
    );
  },
  {
    maxWidth: "50rem",
  }
);

const List = styled("ul", {
  marginBlockStart: 0,
  marginBlockEnd: 0,
  paddingInlineStart: 20,
});

const Section = styled("div", {
  display: "flex",
});
