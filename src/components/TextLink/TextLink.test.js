import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  toBeInTheDocument,
  toHaveClass
} from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/extend-expect";
import { TextLink } from "./";

expect.extend({
  toBeInTheDocument,
  toHaveClass
});

const URLToTest = "https://osilife.com/";

describe("<Textlink />", () => {
  test("Should render the component <TextLink /> with minimum required props (to, title)", () => {
    const { container } = render(<TextLink to="#" title="Amazing Text!" />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test("Should find and click of the component <TextLink />, based on text-query, resulting in page load of https://osilife.com/", () => {
    const { container, getByText } = render(
      <TextLink to={URLToTest} title="It renders a link!" />
    );
    fireEvent.click(getByText("It renders a link!"));
    expect(document.querySelector("a").getAttribute("href")).toBe(URLToTest);
    expect(container).toMatchSnapshot();
  });

  test("Should render an icon within the component <TextLink />, with required props (to, title)", () => {
    const { container } = render(
      <TextLink
        icon="placeholder-bold"
        iconPos="right"
        to="#"
        title="We have a right-aligned placeholder icon"
      />
    );
    expect(container.firstChild).toHaveClass("text-link has-icon icon-right");
    expect(container).toMatchSnapshot();
  });
});
