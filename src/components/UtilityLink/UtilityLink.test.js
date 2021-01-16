import React from "react";
import { render, screen } from "@testing-library/react";
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute
} from "@testing-library/jest-dom/matchers";
import { UtilityLink } from "./";

expect.extend({
  toBeInTheDocument,
  toHaveClass,
  toHaveAttribute
});

describe("UtilityLink", () => {
  // Tests whether the utility link is rendered
  test("renders Utility Link component", () => {
    const { container } = render(
      <UtilityLink
        to="https://osilife.com/"
        title="utility link"
        icon="undefined"
      />
    );
    expect(screen.getByText("utility link").closest("div")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  // Tests whether it has the utility-link class
  test("parent container should have a class of utility-link", () => {
    render(
      <UtilityLink
        icon="placeholder-bold"
        to="https://osilife.com/"
        title="util"
      />
    );
    expect(screen.getByText("util").closest("div")).toHaveClass("utility-link");
  });
  // Renders a title within the utility link
  test("tests whether the correct title and icon are rendered in utility link", () => {
    const { container, getByText } = render(
      <UtilityLink
        to="https://osilife.com/"
        title="test"
        icon="placeholder-bold"
      />
    );
    expect(getByText("test")).toBeTruthy();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="utility-link"
        >
          <a
            href="https://osilife.com/"
          >
            <span
              aria-hidden="true"
              class="icon icon-placeholder-bold icon-24"
              data-testid="icon"
            />
            <span
              class="typography typography-body typography-body-medium"
            >
              test
            </span>
          </a>
        </div>
      </div>
    `);
  });
});
