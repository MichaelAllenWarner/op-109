// @ts-check

/* eslint-disable @typescript-eslint/no-var-requires */

const typography = require('@tailwindcss/typography');

/** @param {number} num */
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');

/** @param {number} px */
const em = (px, base = 16) => `${round(px / base)}em`;

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    screens: {
      /* Tailwind defaults, but in `em` (see https://danburzo.ro/media-query-units/) */
      sm: em(640),
      md: em(768),
      lg: em(1024),
      xl: em(1280),
      '2xl': em(1536),
    },

    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },

  plugins: [typography],

  future: {
    hoverOnlyWhenSupported: true,
  },
};

module.exports = config;
