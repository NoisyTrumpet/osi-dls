import React from 'react';
import ColorPalette from './ColorPalette/ColorPalette';
import './DesignTokens.scss';

// eslint-disable-next-line import/prefer-default-export
export const Color = () => (
  <div label="Color" className="tab color">
    <h1 className="Color">Color</h1>
    <ColorPalette />
  </div>
);
