import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import "./Shell.scss";

const Shell = ({ children, contained }) => {
  const classes = classNames(contained ? "shell-contained" : "shell");

  return (
    <div className={classes}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

Shell.defaultProps = {};

Shell.propTypes = {
  children: PropTypes.node,
  contained: PropTypes.bool
};

export default Shell;
