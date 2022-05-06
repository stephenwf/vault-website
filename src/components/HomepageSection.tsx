import { styled } from '../../stitches.config';
import { color } from '../styles/color';

const Title = styled('h2', {
  fontSize: '2.5em',
  letterSpacing: '-0.6',
  variants: {
    color,
    small: {
      true: {
        fontSize: '1.5em',
      },
    },
  },
  defaultVariants: {
    color: 'purple',
  },
});

const HeadingContainer = styled('div', {
  padding: '0 2em',
  position: 'relative',
  '&::after': {
    content: '',
    position: 'absolute',
    borderLeft: '2px solid #979797',
    top: '4em',
    bottom: 0,
    left: '0.5em',
  },

  variants: {
    noBorder: {
      true: {
        borderLeft: 'none',
      },
    },
    small: {
      true: {
        '&::after': {
          top: '2em',
        },
      },
    },
  },
});

const Container = styled('div', {
  margin: '5em 0',
});

const Paragraph = styled('p', {
  color: '#fff',
  // padding: '1em 1em 2em 1em',
  paddingBottom: '1.5em',
  fontWeight: 300,
  fontSize: '1em',
  margin: 0,
  maxWidth: '24em',
  lineHeight: '1.4em',
  variants: {
    small: {
      true: {
        fontSize: '0.875em',
      },
    },
  },
});

const Example = styled('div', {
  margin: '0 -0.5em',
});

export const HomepageSection = { Container, Title, HeadingContainer, Paragraph, Example };
