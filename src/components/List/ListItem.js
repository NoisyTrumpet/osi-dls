import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListItem = ({ children, addClass, ...rest }) => {
  const classes = classNames(
    'list-item',
    addClass,
  );

  return (
    <li
      className={classes}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      {children}
    </li>
  );
};

ListItem.defaultProps = {};

ListItem.propTypes = {
  children: PropTypes.node,
  addClass: PropTypes.string,
};

export default ListItem;
