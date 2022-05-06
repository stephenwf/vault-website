import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    padding: 0,
    'font-family':
      'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
  html: {
    margin: 0,
    padding: 0,
  },
});
