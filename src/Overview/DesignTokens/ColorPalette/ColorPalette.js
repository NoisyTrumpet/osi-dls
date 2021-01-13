import React from 'react';
import PropTypes from 'prop-types';
import ColorPaletteSwatch from './ColorPaletteSwatch';
import themes from './ColorPaletteThemes';

const ColorPalette = ({ theme }) => {
  const themeObj = themes[theme]; // Get theme
  const ColorPaletteSwatches = []; // Init component array

  Object.keys(themeObj).forEach((key) => {
    const ColorSwatch = <ColorPaletteSwatch key={key} colorName={key} hex={themeObj[key]} />;
    ColorPaletteSwatches.push(ColorSwatch);

    // Adds line break after last color in group
    const LastColorInGroup = new Set(['primary1', 'gray0', 'accentA1', 'accentB1']);

    // Adds line break after each color group based on hardcoded values in LastColorInGroup
    if (LastColorInGroup.has(key)) {
      const linebreak = <br key={`${key}<br>`} />;
      ColorPaletteSwatches.push(linebreak);
    }
  });

  // Return All Color Swatches
  return (
    <div>{ColorPaletteSwatches}</div>
  );
};

ColorPalette.themes = Object.keys(themes);

ColorPalette.defaultProps = {
  theme: 'main',
};

ColorPalette.propTypes = {
  theme: PropTypes.oneOf(['main', 'xmas']),
};

export default ColorPalette;
