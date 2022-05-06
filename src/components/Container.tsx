import { styled } from '../../stitches.config';

export const Container = styled('div', {
  padding: '2em 0.5em',

  variants: {
    layout: {
      center: {
        textAlign: 'center',
      },
    },
    background: {
      blue: {
        backgroundColor: '#192447',
      },
      black: {
        background: '#000',
      },
    },
  },
  defaultVariants: {
    background: 'black',
  },
});
