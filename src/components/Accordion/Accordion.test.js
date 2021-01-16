import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Accordion } from "./";

describe("<Accordion />", () => {
  test("should render", () => {
    const wrapper = shallow(<Accordion />);
    expect(wrapper.getElement()).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should render accordion with 3 sections", () => {
    const Acc = (
      <Accordion>
        <Accordion.Section
          title="Section 1"
          titleID="accordion1id"
          panelId="sect1"
        >
          <span>Text 1</span>
          <span>Text 2</span>
        </Accordion.Section>
        <Accordion.Section
          title="Section 2"
          titleID="accordion2id"
          panelId="sect2"
        >
          <img
            src="https://webfileswest.uswest.os.ctl.io/corporate.hallmark.com/wp-content/uploads/2018/06/Hallmark-Greetings-Logo-black-160x160.jpg"
            alt="Hallmark"
          />
        </Accordion.Section>
        <Accordion.Section
          title="Section Link"
          titleID="accordion4id"
          panelId="sect4"
          link="https://osilife.com/"
        />
      </Accordion>
    );
    const wrapper = shallow(Acc);
    expect(wrapper.getElement()).toBeTruthy();
    expect(wrapper.find(Accordion.Section).length).toBe(3);
    expect(wrapper.find("span").length).toBe(2);
    expect(wrapper.find("img").length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
