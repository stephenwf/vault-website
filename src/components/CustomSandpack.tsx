import '@codesandbox/sandpack-react/dist/index.css';
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackThemeProvider,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import { styled } from '@stitches/react';
import { sandpackTheme } from '../styles/sandpack-theme';

const SandpackContainer = styled('div', { borderRadius: 5, overflow: 'hidden', marginBottom: '1em' });

export const CustomSandpack = (props: any) => (
  <SandpackContainer>
    <SandpackThemeProvider
      theme={
        props.color
          ? {
              ...sandpackTheme,
              syntax: {
                ...sandpackTheme.syntax,
                string: props.color,
              },
            }
          : sandpackTheme
      }
    >
      <SandpackProvider autorun {...props}>
        <SandpackCodeEditor showTabs={false} showRunButton={false} />
        <div style={{ display: 'none' }}>
          <SandpackPreview />
        </div>
      </SandpackProvider>
    </SandpackThemeProvider>
  </SandpackContainer>
);
