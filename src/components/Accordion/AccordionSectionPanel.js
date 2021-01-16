import React from 'react';
import PropTypes from 'prop-types';

const AccordionSectionPanel = ({ children, panelId, titleID }) => (
  <div
    id={panelId}
    role="region"
    aria-labelledby={titleID}
    className="accordion-section-content"
  >
    <div className="accordion-section-content-wrapper">
      {children}
    </div>
  </div>
);

AccordionSectionPanel.defaultProps = {};

AccordionSectionPanel.propTypes = {
  panelId: PropTypes.string.isRequired,
  titleID: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default AccordionSectionPanel;
