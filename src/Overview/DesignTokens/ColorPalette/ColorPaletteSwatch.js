import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../../../components/Typography';
import './ColorPaletteSwatch.scss';

export function getTextColorBasedOnColorBrightness(hexString) {
  const hex = hexString.replace('#', '');
  const rgbRed = parseInt(hex.substr(0, 2), 16);
  const rgbGreen = parseInt(hex.substr(2, 2), 16);
  const rgbBlue = parseInt(hex.substr(4, 2), 16);
  const brightness = (rgbRed * 299 + rgbGreen * 587 + rgbBlue * 114) / 1000;
  return brightness > 128 ? '#000' : '#fff';
}

export function hexConvert(hex) {
  let color;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    color = hex.substring(1).split('');
    color = `0x${color.join('')}`;
    // convert to RGB
    return [(color >> 16) & 255, (color >> 8) & 255, color & 255].join(','); // eslint-disable-line no-bitwise, no-mixed-operators
  }
  throw new Error('Bad hex!');
}

const ColorPaletteSwatch = ({ colorName, hex }) => {
  const fontColor = getTextColorBasedOnColorBrightness(hex);
  const rgb = hexConvert(hex);
  const SwatchTypographyChild = (
    <>
      <input
        type="checkbox"
        id={`color-${colorName}`}
        className="color-toggle"
        style={{ background: fontColor }}
        aria-label="Show HEX/RGB value"
      />
      <Typography variant="helper" style={{ color: fontColor }}>
        <div className="color-name">{colorName}</div>
        <div className="color-hex">{hex}</div>
        <div className="color-rgb">{rgb}</div>
      </Typography>
    </>
  );
  const SwatchProps = {
    className: 'color-palette-swatch',
    style: { backgroundColor: hex },
  };
  return React.createElement('div', SwatchProps, SwatchTypographyChild);
};

ColorPaletteSwatch.propTypes = {
  colorName: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
};

export default ColorPaletteSwatch;
