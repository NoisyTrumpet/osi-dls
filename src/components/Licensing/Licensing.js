import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../Image';
import { Typography } from '../Typography';
import './Licensing.scss';

const Licensing = ({ logos, text }) => {
  function renderLogos(logosList) {
    return logosList.map(({ url, alt }) => <Image src={url} alt={alt} key={url} />);
  }

  return (
    <div className="licensing">
      { logos && logos.length && (
        <div className="licensing-logos">
          {renderLogos(logos)}
        </div>
      )}

      <Typography variant="licensing">{text}</Typography>
    </div>
  );
};

Licensing.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  })),
  text: PropTypes.string,
};

export default Licensing;
