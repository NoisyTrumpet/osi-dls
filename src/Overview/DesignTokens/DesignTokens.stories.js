import React from "react";
import { storiesOf } from "@storybook/react";
import { Layout } from "./Layout";
import { Color } from "./Color";
import { TypographyToken } from "./TypographyToken";

storiesOf("overview/Design Tokens", module)
  .add("Layout", () => <Layout />)
  .add("Color", () => <Color />)
  .add("Typography", () => <TypographyToken />);
