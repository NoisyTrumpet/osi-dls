import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ContentCard } from "./";

const exampleCard = {
  title: {
    title1: "title 1"
  },
  copy: {
    copy1: "copy 1",
    copy2: "copy 2",
    copy3: "copy 3"
  },
  href: {
    url: "https://osilife.com",
    target: "_blank",
    rel: ""
  },
  image: {
    alt: "Hallmark Logo",
    size: {
      mobile: "https://ideas.hallmark.com/wp-content/uploads/2020/06/2.jpg",
      tablet: "https://ideas.hallmark.com/wp-content/uploads/2020/06/2.jpg",
      desktop: "https://ideas.hallmark.com/wp-content/uploads/2020/06/2.jpg"
    }
  }
};

describe("ContentCard", () => {
  test("Should render", () => {
    const wrapper = shallow(
      <ContentCard type="media" theme="vertical" cardData={exampleCard} />
    );
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
