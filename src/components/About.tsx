import { styled } from "@stitches/react";

export const About = styled(
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
