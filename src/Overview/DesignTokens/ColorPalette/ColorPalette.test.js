import '@testing-library/jest-dom/extend-expect'; // grants us all jest-dom methods
import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorPalette from './ColorPalette';
import ColorPaletteSwatch, {
  getTextColorBasedOnColorBrightness,
  hexConvert,
} from './ColorPaletteSwatch';
import themes from './ColorPaletteThemes';

describe('The ColorPaletteSwatch Component', () => {
  test('getTextColorBasedOnColorBrightness function returns the correct hex', () => {
    expect(getTextColorBasedOnColorBrightness('#ffffff')).toBe('#000');
    expect(getTextColorBasedOnColorBrightness('#888888')).toBe('#000');
    expect(getTextColorBasedOnColorBrightness('#777777')).toBe('#fff');
    expect(getTextColorBasedOnColorBrightness('#000000')).toBe('#fff');
  });

  test('hexConvert function throws an error if the component has a missing/invalid hex prop', () => {
    expect(() => hexConvert(3)).toThrow();
    expect(() => hexConvert()).toThrow();
    expect(() => hexConvert('#000000000')).toThrow();
    expect(() => hexConvert('#000')).not.toThrow();
    expect(() => hexConvert('#000000')).not.toThrow();
    expect(() => hexConvert('#fff')).not.toThrow();
    expect(() => hexConvert('#ffffff')).not.toThrow();
  });

  test('hexConvert successfully converts a hex string into the correct rgb string', () => {
    render(
      <ColorPaletteSwatch colorName="primary" hex={themes.main.primary} />,
    );

    // convert the primary color to rgb and then create a regex to find it in the document
    // this helps future proof this test
    // and make it more resilient to changes in ColorPaletteThemes.js
    const rgb = hexConvert(themes.main.primary);
    const regex = new RegExp(`${rgb}`, 'i');
    const rgbDiv = screen.getByText(regex);
    expect(rgbDiv).toBeInTheDocument();
  });

  it('renders successfully', () => {
    render(
      <ColorPaletteSwatch colorName="primary" hex={themes.main.primary} />,
    );

    // we should only render 1 input, and it should be a checkbox
    const inputs = screen.getByLabelText(/Show HEX\/RGB value/i);
    expect(inputs).toHaveAttribute('type', 'checkbox');

    // make sure that the div with our colorName was rendered properly
    const colorNameDiv = screen.getByText(/primary/i);
    expect(colorNameDiv).toBeInTheDocument();
  });
});

describe('The ColorPalette Component', () => {
  it('renders successfully', () => {
    render(<ColorPalette theme="main" />);

    // we should be rendering inputs (swatches)
    const inputs = screen.getAllByLabelText(/Show HEX\/RGB value/i);
    expect(inputs.length).toBeGreaterThanOrEqual(1);
  });

  it('renders different colors based on the theme prop', () => {
    const { rerender } = render(<ColorPalette theme="main" />);

    // Note that this test is grabbing the colors by text in a div
    const mainRegex = new RegExp(themes.main.primary, 'i');
    const mainHexColorDiv = screen.getByText(mainRegex);
    expect(mainHexColorDiv).toBeInTheDocument();

    rerender(<ColorPalette theme="xmas" />);
    // the previous primary hex should no longer be findable
    expect(screen.queryByText(mainRegex)).toBeNull();

    const xmasRegex = new RegExp(themes.xmas.primary, 'i');
    const xmasHexColorDiv = screen.getByText(xmasRegex);
    expect(xmasHexColorDiv).toBeInTheDocument();
  });
});
