import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/extend-expect";
import { SimpleContent } from "./";
import { Typography } from "../Typography";
import { TextLink } from "../TextLink";

expect.extend({
  toBeInTheDocument
});

describe("<SimpleContent />", () => {
  it("Should render", () => {
    const contentText = "Test content";
    const content = [
      <p key={1}>
        <TextLink
          typo-variant="text-link"
          title="Test Link"
          to="https://osilife.com"
        />
      </p>,
      <Typography variant="body" key={2}>
        {contentText}
      </Typography>
    ];

    const title = "Test Title";
    const icon = "home";
    const subhead = "Test Subhead";
    const { container } = render(
      <SimpleContent
        title={title}
        icon={icon}
        subhead={subhead}
        content={content}
      />
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subhead)).toBeInTheDocument();
    expect(screen.getByText(contentText)).toBeInTheDocument();
    expect(screen.getByText(contentText)).toHaveClass("typography-body");
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toHaveClass(`icon-${icon}`);
    expect(container.querySelector("a")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("Should not render icon or subhead", () => {
    const title = "Test Title";
    const subhead = "Test Subhead";
    const content = [<button type="submit">button</button>];
    const { container } = render(<SimpleContent content={content} />);
    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(subhead)).not.toBeInTheDocument();
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
