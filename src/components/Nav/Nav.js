import React from "react";
// import PropTypes from "prop-types";
import Logo from "../Logo/Logo";
import List from "../List/List";
import TextLink from "../TextLink/TextLink";
// import { useMediaQuery } from "react-responsive";

import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <Logo variant="horizontal" to="/" />
      <div className="menu-wrapper">
        <List horizontal>
          <List.Item>
            <TextLink
              to="#about"
              title="About"
              typoVariant="cta-tertiary"
              addClass="nav-item"
              color="brand-blue"
            />
          </List.Item>
          <List.Item>
            <TextLink
              to="#benefits"
              title="Benefits"
              typoVariant="cta-tertiary"
              addClass="nav-item"
              color="brand-blue"
            />
          </List.Item>
        </List>
      </div>
    </nav>
  );
};

// Nav.defaultProps = {
//   logoText: "Patient Care Partners"
// };

// Nav.propTypes = {
//   logoText: PropTypes.string
// };

export default Nav;
