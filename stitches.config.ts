import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      primary: '#000',
      primaryText: '#fff',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
  // media: {
  //   bp1: '(min-width: 480px)',
  // },
  // utils: {
  //   marginX: (value) => ({ marginLeft: value, marginRight: value }),
  // },
});
