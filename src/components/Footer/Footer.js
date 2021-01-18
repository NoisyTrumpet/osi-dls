import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Typography } from "../Typography";
import "./Footer.scss";
import { List } from "../List";
import { TextLink } from "../TextLink";

const Footer = ({ backgroundColor, businessName, footerText }) => {
  const classes = classNames("footer", `background-color-${backgroundColor}`);

  const year = new Date().getFullYear();
  return (
    <footer className={classes}>
      <Typography variant="body-medium" color="brand-white">
        © {year} {businessName}. All Rights Reserved.
      </Typography>
      <List horizontal>
        <List.Item>
          <TextLink
            to="/terms"
            title="Terms & Conditions"
            typoVariant="body-medium"
            color="brand-white"
            addClass="bold"
          />
        </List.Item>
        <List.Item>
          <TextLink
            to="/privacy"
            title="Privacy Policy"
            typoVariant="body-medium"
            color="brand-white"
            addClass="bold"
          />
        </List.Item>
      </List>
      <Typography variant="body" color="brand-white">
        {footerText}
      </Typography>
    </footer>
  );
};

Footer.defaultProps = {
  backgroundColor: "primary",
  businessName: "Osi Vision LLC dba OsiLife",
  footerText:
    "The health information contained on this website is for educational purposes only and does not constitute medical advice or a guaranty of treatment, outcome, or cure. Please consult with your healthcare provider for specific medical advice. This information is not intended to create a physician-patient relationship between OsiLife or any physician and the reader."
};

Footer.propTypes = {
  backgroundColor: PropTypes.oneOf(["primary", "primary1", "secondary"]),
  businessName: PropTypes.string,
  footerText: PropTypes.string
  // Links Prop
};

export default Footer;
