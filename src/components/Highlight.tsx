import { styled } from '@stitches/react';
import { color } from '../styles/color';

export const Highlight = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
  variants: {
    color,
  },
  defaultVariants: {
    color: 'purple',
  },
});
