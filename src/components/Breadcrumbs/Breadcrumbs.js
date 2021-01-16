import React from 'react';
import PropTypes from 'prop-types';
import { List } from '../List';
import BreadcrumbItem from './BreadcrumbItem';
import './Breadcrumbs.scss';

const Breadcrumbs = ({ breadcrumbs, ariaLabel }) => (
  <nav aria-label={ariaLabel}>
    <List addClass="breadcrumbs" horizontal>
      {breadcrumbs && breadcrumbs.map((breadcrumb) => (
        <BreadcrumbItem to={breadcrumb.to} title={breadcrumb.title} key={breadcrumb.title} />
      ))}
    </List>
  </nav>
);

Breadcrumbs.defaultProps = {};

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      to: PropTypes.string,
    }),
  ).isRequired,
  ariaLabel: PropTypes.string,
};

export default Breadcrumbs;
