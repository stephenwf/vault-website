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
      `'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    monoFont:
      `Consolas,monaco,'Ubuntu Mono','Liberation Mono','Courier New',Courier,monospace`,
    fontSize: '14px',
    lineHeight: '1.4',
  },
};
