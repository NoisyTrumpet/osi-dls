import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DescriptionListItem from './DescriptionListItem';
import './DescriptionList.scss';

const DescriptionList = ({ descriptionListData, addClass }) => {
  const classes = classNames(
    'description-list',
    `${descriptionListData.some((key) => !!key.icon) ? 'has-icons' : ''}`,
    addClass,
  );

  const renderDescriptionList = (data) => (
    <dl className={classes}>
      {data.map((item) => (
        <DescriptionListItem
          key={item.titleText}
          icon={item.icon}
          titleText={item.titleText}
          descriptionText={item.descriptionText}
        />
      ))}
    </dl>
  );

  return (
    renderDescriptionList(descriptionListData)
  );
};

DescriptionList.defaultProps = {};

DescriptionList.propTypes = {
  addClass: PropTypes.string,
  descriptionListData: PropTypes.arrayOf(PropTypes.object),
};

export default DescriptionList;
