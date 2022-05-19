import { globalCss } from '@stitches/react';
import { sandpackTheme } from "./styles/sandpack-theme";

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    maxWidth: 'auto',
    margin: 0,
    padding: 0,
    'font-family':
      'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
  'body.load': {
    maxWidth: '100%',
  },
  html: {
    margin: 0,
    padding: 0,
    fontSize: 16,
  },
  pre: {
    fontFamily: sandpackTheme.typography.monoFont,
    lineHeight: 1.5,
    fontSize: '1em',
  }
});
