import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

const DescriptionListItem = ({ icon, titleText, descriptionText }) => (
  <>
    <dt className={`description-list-title ${icon ? 'has-icon' : 'no-icon'}`}>
      {icon && <Icon size={24} name={icon} addClass="description-list-icon" color="gray5" />}
      <Typography variant="body-medium">{titleText}</Typography>
    </dt>
    <dd className="description-list-description">
      <Typography variant="body" htmlTagOverride="p">{descriptionText}</Typography>
    </dd>
  </>
);

DescriptionListItem.propTypes = {
  icon: PropTypes.string,
  titleText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired,
};

export default DescriptionListItem;
