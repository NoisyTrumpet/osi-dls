import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Wrapper } from "../../components/Wrapper";

import "./Shell.scss";
// @TODO: Fix release
const Shell = ({ children, contained }) => {
  const classes = classNames(contained ? "shell-contained" : "shell");

  return (
    <Wrapper addClass={classes}>
      <Nav />
      {children}
      <Footer />
    </Wrapper>
  );
};

Shell.defaultProps = {};

Shell.propTypes = {
  children: PropTypes.node,
  contained: PropTypes.bool
};

export default Shell;
