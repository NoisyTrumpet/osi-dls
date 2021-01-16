import React from 'react';
import PropTypes from 'prop-types';
import './SimpleContent.scss';
import { Typography } from '../Typography';
import { Icon } from '../Icon';

const SimpleContent = ({ title, icon, subhead, content }) => (
  <div className="simplecontent-wrapper">
    { title && (
      <Typography variant="body-medium" htmlTagOverride="h3">{title}</Typography>
    )}

    <div className="simplecontent-body">
      { icon && (
        <div className="simplecontent-icon">
          <Icon size={16} name={icon} />
        </div>
      )}

      <div className="simplecontent-content">
        { subhead && (
          <Typography variant="body">{subhead}</Typography>
        )}

        { content }
      </div>
    </div>
  </div>
);

SimpleContent.defaultProps = {};

SimpleContent.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  subhead: PropTypes.node,
  content: PropTypes.arrayOf(PropTypes.node),
};

export default SimpleContent;
