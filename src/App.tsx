import { styled } from "@stitches/react";

import { About } from "./components/About";
import { Content } from "./components/Content";
import { ProfileCard } from "./components/ProfileCard";
import { Section } from "./components/Section";
import { Sidebar } from "./components/Sidebar";
import { globalStyles } from "./style";

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
