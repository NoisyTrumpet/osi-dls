import { create } from '@storybook/theming';

export default create({
    base: 'light',

    // UI
    appBg: "#F7F7F7",
    appContentBg: "white",
    appBorderRadius: 4,

    // Text colors
    textColor: "black",
    textInverseColor: "rgba(255,255,255,0.9)",

    // HMK Branding for Storybook
    colorPrimary: "#00adbb",
    colorSecondary: "#00adbb",

    // brand
    brandTitle: 'OSI-DLS',
    brandImage: 'https://www.noisytrumpet.com/wp-content/uploads/2021/01/osi.png',
    brandUrl: 'https://www.osilife.com/',
});
