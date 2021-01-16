import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Section.scss';

const Section = ({ addClass, children, id, backgroundColor, styles }) => {
  const sectionClasses = addClass && addClass.split(' ').map((i) => `section-${i}`);
  const backgroundColorClass = { [`background-color-${backgroundColor}`]: backgroundColor };
  const classes = classNames(
    'section',
    sectionClasses,
    backgroundColorClass,
  );

  return (
    <section id={id} className={classes} style={styles}>
      {children}
    </section>
  );
};

Section.defaultProps = {};

Section.propTypes = {
  id: PropTypes.string,
  addClass: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.string),
};

export default Section;
