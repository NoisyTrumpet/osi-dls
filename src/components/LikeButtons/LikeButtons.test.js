import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // grants us all jest/dom methods
import {
  toBeInTheDocument,
  toHaveAttribute
} from "@testing-library/jest-dom/matchers";
import { LikeButtons } from "./";

expect.extend({ toBeInTheDocument, toHaveAttribute });

describe("<LikeButtons/>", () => {
  const elString = "exampleProduct";
  const likeTxt = "Like this product";
  const dislikeTxt = "Dislike this product";
  const count = { likes: 10, dislikes: 3 };
  const lkBtns = (
    <LikeButtons
      domId={elString}
      likeText={likeTxt}
      dislikeText={dislikeTxt}
      likeCount={count}
    />
  );

  test("correctly displays initial count values", () => {
    const { getByText } = render(lkBtns);
    const likeCountSRT = getByText(`like count for ${elString}`);
    const dislikeCountSRT = getByText(`dislike count for ${elString}`);
    // TODO: Find another way to target the counts
    const likeCount = likeCountSRT.nextSibling.textContent;
    const dislikeCount = dislikeCountSRT.nextSibling.textContent;
    expect(likeCount).toBe(count.likes.toString());
    expect(dislikeCount).toBe(count.dislikes.toString());
  });

  test('calls "handle click" prop on like/dislike button click', () => {
    const { getAllByRole } = render(lkBtns);
    const likeBtnArr = getAllByRole("button", { name: likeTxt }); // component has two buttons; return array containing correct one
    const dislikeBtnArr = getAllByRole("button", { name: dislikeTxt });
    fireEvent.click(likeBtnArr[0]);
    expect(likeBtnArr[0]).toHaveAttribute("aria-pressed", "true");
    expect(dislikeBtnArr[0]).toHaveAttribute("aria-pressed", "false");

    const { rerender } = render(lkBtns);
    rerender(lkBtns);
    fireEvent.click(dislikeBtnArr[0]);
    expect(dislikeBtnArr[0]).toHaveAttribute("aria-pressed", "true");
    expect(likeBtnArr[0]).toHaveAttribute("aria-pressed", "false");
  });

  it("renders like and dislike buttons successfully", () => {
    render(lkBtns);
    const likeBtnArr = screen.getAllByRole("button", { name: likeTxt });
    const dislikeBtnArr = screen.getAllByRole("button", { name: dislikeTxt });
    expect(likeBtnArr[0]).toBeInTheDocument();
    expect(dislikeBtnArr[0]).toBeInTheDocument();
  });

  it("should render <LikeButtons>", () => {
    const { container } = render(lkBtns);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="like-wrapper"
      >
        <button
          aria-pressed="false"
          class="btn-icon btn-icon-simple"
          id="like-exampleProduct"
          role="button"
          type="button"
        >
          <span
            class="screen-reader-text"
          >
            Like this product
          </span>
          <span
            aria-hidden="true"
            class="icon icon-like-like-bold icon-16"
            data-testid="icon"
          />
        </button>
        <div
          id="likeCount-exampleProduct"
        >
          <span
            class="typography screen-reader-text"
          >
            like count for exampleProduct
          </span>
          <span
            class="typography typography-helper"
          >
            10
          </span>
        </div>
        <button
          aria-pressed="false"
          class="btn-icon btn-icon-simple"
          id="dislike-exampleProduct"
          role="button"
          type="button"
        >
          <span
            class="screen-reader-text"
          >
            Dislike this product
          </span>
          <span
            aria-hidden="true"
            class="icon icon-like-dislike-bold icon-16"
            data-testid="icon"
          />
        </button>
        <div
          id="dislikeCount-exampleProduct"
        >
          <span
            class="typography screen-reader-text"
          >
            dislike count for exampleProduct
          </span>
          <span
            class="typography typography-helper"
          >
            3
          </span>
        </div>
      </div>
    `);
  });
});
