import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListItem from './ListItem';
import './List.scss';

const List = ({ children, className, addClass, ordered, horizontal, ...rest }) => {
  const classes = classNames(
    className,
    addClass,
    { 'list-horizontal': horizontal },
  );
  const ListTag = ordered ? 'ol' : 'ul';

  return (
    <ListTag
      className={classes}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      {children}
    </ListTag>
  );
};

List.Item = ListItem;

List.defaultProps = {};

List.propTypes = {
  ordered: PropTypes.bool,
  horizontal: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.oneOf([
    'list-ordered',
    'list-unordered',
  ]),
  addClass: PropTypes.string,
};

export default List;
