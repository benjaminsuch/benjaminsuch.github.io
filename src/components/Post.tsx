import { styled } from "@stitches/react";
import { PropsWithChildren } from "react";

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
