import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography } from '../Typography';
import { IconButton } from '../IconButton';
import './Address.scss';
// TODO Make onClick function to edit preferred store whenever routing has been set up

/**
 * Utilize `Address` to display an address and an optional link to edit if it is preferred store
 */

const Address = ({
  title,
  address1,
  address2,
  address3,
  city,
  state,
  zip,
  isShortAddress,
  isPreferredStore,
  onClick,
  addClass,
  ariaControls
}) => {
  const titleClasses = classNames(
    'address-line',
    isPreferredStore ? ' address-title-bold' : '',
  );

  const cityStateZip = [
    city && (state || zip) ? `${city},` : city,
    state,
    zip,
  ]
    .filter((val) => val)
    .join(' ');

  return (
    <Typography variant="body" htmlTagOverride="address" addClass={addClass}>
      <span className={titleClasses} data-testid="address-title">{title}
      {isPreferredStore
        && (
          <IconButton ariaControls={ariaControls} icon="edit-bold" variant="simple" addClass="edit-preferred-store" click={onClick}>
            <Typography variant="srt">Change preferred store</Typography>
          </IconButton>
        )}
      </span>
      {address2 && <span className="address-line">{address2}</span>}
      <span className="address-line">{address1}</span>
      {address3 && <span className="address-line">{address3}</span>}
      {!isShortAddress && <span className="address-line">{cityStateZip}</span>}
    </Typography>
  );
};

Address.propTypes = {
  title: PropTypes.node,
  address1: PropTypes.string,
  address2: PropTypes.string,
  address3: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
  isShortAddress: PropTypes.bool,
  isPreferredStore: PropTypes.bool,
  onClick: PropTypes.func,
  addClass: PropTypes.string,
  ariaControls: PropTypes.string,
};

export default Address;
