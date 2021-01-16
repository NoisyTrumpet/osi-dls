import React from "react";
import { storiesOf } from "@storybook/react";
import { Accordion } from "./";
import { TextLink } from "../TextLink";
import { withNoPadding } from "../../util";
import { List } from "../List";
import { Logo } from "../Logo";

const parameters = {
  component: Accordion,
  componentSubtitle:
    "The <Accordion /> tag defines a group of links and link categories used for navigation purposes (width is set by parent).",
  jest: ["Accordion"]
};

const overflowSectionTitle =
  "Section title that is way too long to only be on one line so expect this title to wrap more than once, but if it only wraps once that's fine too";
const overflowSectionContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Vehicula ipsum a arcu cursus vitae congue. Magna ac placerat vestibulum lectus mauris ultrices eros. Eget arcu dictum varius duis at consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Lobortis scelerisque fermentum dui faucibus in ornare. Maecenas ultricies mi eget mauris pharetra. Elementum nibh tellus molestie nunc non blandit massa enim nec. Lacus viverra vitae congue eu consequat ac felis donec et. Cum sociis natoque penatibus et magnis dis parturient. Sapien eget mi proin sed libero. Sem et tortor consequat id porta. Morbi non arcu risus quis varius quam quisque id diam. Et sollicitudin ac orci phasellus egestas tellus.";

const AccordionExample = (
  <Accordion>
    <Accordion.Section title="Section 1" titleID="accordion1id" panelId="sect1">
      <List addClass="list__cta-text-link">
        <List.Item>
          <TextLink
            to="https://osilife.com/"
            title="Link 1"
            typoVariant="text-link"
          />
        </List.Item>
        <List.Item>
          <TextLink
            to="https://osilife.com/"
            title="Link 2"
            typoVariant="text-link"
          />
        </List.Item>
        <List.Item>
          <TextLink
            to="https://osilife.com/"
            title="Link 3"
            typoVariant="text-link"
          />
        </List.Item>
        <List.Item>
          <TextLink
            to="https://osilife.com/"
            title="Link 4"
            typoVariant="text-link"
          />
        </List.Item>
      </List>
    </Accordion.Section>
    <Accordion.Section title="Section 2" titleID="accordion2id" panelId="sect2">
      <Logo />
    </Accordion.Section>
    <Accordion.Section
      title={overflowSectionTitle}
      titleID="accordion3id"
      panelId="sect3"
    >
      <p>{overflowSectionContent.repeat(5)}</p>
    </Accordion.Section>
    <Accordion.Section
      title="Section Link"
      titleID="accordion4id"
      panelId="sect4"
      link="https://osilife.com/"
    />
  </Accordion>
);

const AccordionExampleTwo = (
  <Accordion>
    <Accordion.Section
      title="Section 1"
      titleID="accordion1id"
      panelId="sect1"
      titleVariant="body-medium"
      titleColor="primary"
    >
      <List addClass="list__cta-text-link">
        <List.Item>
          <TextLink
            to="https://osilife.com/"
            title="Link 1"
            typoVariant="text-link"
          />
        </List.Item>
        <List.Item>
          <TextLink
            to="https://osilife.com/"
            title="Link 2"
            typoVariant="text-link"
          />
        </List.Item>
        <List.Item>
          <TextLink
            to="https://osilife.com/"
            title="Link 3"
            typoVariant="text-link"
          />
        </List.Item>
        <List.Item>
          <TextLink
            to="https://osilife.com/"
            title="Link 4"
            typoVariant="text-link"
          />
        </List.Item>
      </List>
    </Accordion.Section>
    <Accordion.Section
      title="Section 2"
      titleID="accordion2id"
      panelId="sect2"
      titleVariant="body-medium"
      titleColor="primary"
    >
      <Logo />
    </Accordion.Section>
    <Accordion.Section
      title={overflowSectionTitle}
      titleID="accordion3id"
      panelId="sect3"
      titleVariant="body-medium"
      titleColor="primary"
    >
      <p>{overflowSectionContent.repeat(5)}</p>
    </Accordion.Section>
    <Accordion.Section
      title="Section Link"
      titleID="accordion4id"
      panelId="sect4"
      link="https://osilife.com/"
      titleVariant="body-medium"
      titleColor="primary"
    />
  </Accordion>
);
storiesOf("components/Accordion", module)
  .addParameters(parameters)
  .add("Default", () => AccordionExample)
  .add("Accordion contained in a 320px wide <div>", () => (
    <div style={{ width: "320px" }}>{AccordionExample}</div>
  ))
  .add("Accordion with no storybook padding", () =>
    withNoPadding(AccordionExample)
  )
  .add(
    "Accordion with different title color and variant",
    () => AccordionExampleTwo
  );
