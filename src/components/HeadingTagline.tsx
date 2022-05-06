import { styled } from '../../stitches.config';
import { color } from '../styles/color';

export const HeadingTagline = styled('div', {
  fontSize: '1.5em',
  fontWeight: 600,
  color: '#fff',
  maxWidth: '16em',
  margin: '0 auto',
  letterSpacing: '-0.6',
  lineHeight: '1.4em',
  variants: {
    color,
  },
  defaultVariants: {
    color: 'white',
  },
});
