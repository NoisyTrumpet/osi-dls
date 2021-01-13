import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Overview.scss';
import { Typography } from '../components/Typography';
import { version, homepage } from '../../package.json';

// eslint-disable-next-line import/prefer-default-export
export const Overview = ({ addClass, backgroundColor }) => {
  const introductionClasses =
    addClass && addClass.split(' ').map((i) => `introduction-${i}`);
  const backgroundColorClass = {
    [`background-color-${backgroundColor}`]: backgroundColor,
  };
  const classes = classNames(
    'introduction',
    introductionClasses,
    backgroundColorClass,
  );
  return (
    <div className={classes}>
      <Typography variant="headline-6">Introduction</Typography>
      <Typography variant="subtext">
        The Design Language System (DLS) contains several React components such
        as buttons, form fields, etc which can be imported in React and are
        self-contained with styling, test suites, functional JSX code, etc. For
        detailed readme, issues, suggestions, and related projects, view the{' '}
        <a href={homepage}>
          {' '}
          Project Source
        </a>{' '}
        on GitHub.
      </Typography>
      <br />
      <Typography variant="body-medium">{`DLS v${version}`}</Typography>
    </div>
  );
};

Overview.defaultProps = {};

Overview.propTypes = {
  addClass: PropTypes.string,
  backgroundColor: PropTypes.string,
};
