import React from "react";
import PropTypes from "prop-types";

import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Wrapper } from "../../components/Wrapper";

import "./Shell.scss";

const Shell = ({ children }) => {
  return (
    <Wrapper addClass="shell">
      <Nav />
      {children}
      <Footer />
    </Wrapper>
  );
};

Shell.defaultProps = {};

Shell.propTypes = {
  children: PropTypes.node
  // @TODO: Max width inner container? Full width versus max-width
};

export default Shell;
