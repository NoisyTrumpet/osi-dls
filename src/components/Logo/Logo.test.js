import React from "react";
import { render } from "@testing-library/react";
// import {
//   toBeInTheDocument,
//   toHaveClass,
//   toHaveAttribute,
// } from '@testing-library/jest-dom/matchers';
import { Logo } from "./";

// expect.extend({
//   toBeInTheDocument,
//   toHaveClass,
//   toHaveAttribute,
// });

describe("Logo", () => {
  test("renders Logo component", () => {
    const { container } = render(<Logo />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
