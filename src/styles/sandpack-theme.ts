import { SandpackTheme } from '@codesandbox/sandpack-react';

export const sandpackTheme: SandpackTheme = {
  palette: {
    activeText: '#ae6fff',
    defaultText: '#999999',
    inactiveText: '#110b19',
    activeBackground: '#040404',
    defaultBackground: '#040404',
    inputBackground: '#242424',
    accent: '#ae6fff',
    errorBackground: '#baff4d',
    errorForeground: '#baff4d',
  },
  syntax: {
    plain: '#FFFFFF',
    comment: {
      color: '#757575',
      fontStyle: 'italic',
    },
    keyword: '#ae6fff',
    tag: '#71fbff',
    punctuation: '#ffffff',
    definition: '#dfc5ff',
    property: '#ae6fff',
    static: '#baff4d',
    string: '#34f9ff',
  },
  typography: {
    bodyFont:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monoFont:
      '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
    fontSize: '14px',
    lineHeight: '1.4',
  },
};
