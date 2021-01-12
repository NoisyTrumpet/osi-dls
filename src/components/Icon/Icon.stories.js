import React from "react";
import PropTypes from "prop-types";
import { storiesOf } from "@storybook/react";
import { withSmartKnobs } from "storybook-addon-smart-knobs";
import { Icon } from "./";
import iconArray from "./helpers/getIconArray";

const IconLabel = ({ name }) => <span>{name}</span>;

const parameters = {
  component: Icon,
  componentSubtitle: "Utilize <Icon /> to present icons",
  jest: ["Icon"]
};

storiesOf("components/Icon", module)
  .addParameters(parameters)
  .add("Labels", () => (
    <div className="sb-icon-container labels">
      {iconArray.map(key => (
        <div className="sb-icon" key={key}>
          <Icon name={key} size={24} />
          <div className="sb-icon-name">
            <IconLabel name={key} />
          </div>
        </div>
      ))}
    </div>
  ))
  .add("No Labels", () => (
    <div className="sb-icon-container no-labels">
      {iconArray.map(key => (
        <div className="sb-icon" key={key}>
          <Icon name={key} size={24} />
        </div>
      ))}
    </div>
  ));
storiesOf("components/Icon", module)
  .addParameters(parameters)
  .addDecorator(withSmartKnobs())
  .add("With Badge", () => <Icon name="notification-default" badgeCount={1} />);
IconLabel.defaultProps = {};

IconLabel.propTypes = {
  name: PropTypes.string.isRequired
};
