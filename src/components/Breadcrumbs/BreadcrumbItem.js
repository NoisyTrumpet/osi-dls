import React from 'react';
import PropTypes from 'prop-types';
import { List } from '../List';
import { Typography } from '../Typography';

const BreadcrumbItem = ({
  to,
  title,
  target,
  rel,
}) => {
  const typography = <Typography variant="breadcrumb">{title}</Typography>;
  return (
    <List.Item>
      {to
        ? (
          <a href={to} className="breadcrumb-link" target={target} rel={rel}>
            {typography}
          </a>
        )
        : typography}
    </List.Item>
  );
};

BreadcrumbItem.defaultProps = {};

BreadcrumbItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default BreadcrumbItem;
